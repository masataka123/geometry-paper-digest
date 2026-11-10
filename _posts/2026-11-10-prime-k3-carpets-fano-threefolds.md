---
layout: paper
title: Extendability of general prime $K3$ surfaces without Gaussian maps and classification of prime Fano threefolds
title_ja: K3 carpetによるprime K3曲面の拡張可能性とFano三次元分類
authors: Jayan Mukherjee, with an appendix written jointly with Anand Deopurkar
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: In arXiv:2409.03960 an approach to the question of extendability of projective varieties via degeneration to ribbons was introduced, and in arXiv:2503.12661 it was used to give a new proof of optimal results on the extendability of general non-prime $K3$ surfaces and the classification of non-prime Fano threefolds. In this article we treat the prime case. We give a new proof of the optimal results on the extendability of general prime $K3$ surfaces of every genus, of the classification of prime Fano threefolds of Picard rank one due to Fano, Iskovskikh and Mukai, and of the irreducibility of their Hilbert schemes. This involves degenerations of $K3$ surfaces to ribbons on embedded rational normal scrolls, called $K3$ carpets. We compute exactly the cohomology of the twisted normal bundle of these $K3$ carpets, instead of computing coranks of Gaussian maps of the canonical curve sections. The key challenge is to analyze the coboundary map of the sequence relating the normal
  bundle of the $K3$ carpet to the normal bundle of the scroll. We give a deformation theoretic interpretation of this map. Given such a $K3$ carpet and its hyperplane section, which is a canonical ribbon, we show that the coboundary map corresponds to the obstruction to lifting a first order deformation of the underlying scroll fixing the underlying rational normal curve to a first order deformation of the $K3$ carpet fixing the canonical ribbon. To compute the obstruction, we use a result on extensions of non-split ribbons on any curve to a unique $K$-trivial carpet in a canonical way.
topic: algebraic-geometry
tags:
- fano-varieties
- hyperkahler-geometry
- moduli
- vector-bundles-sheaves
arxiv_id: 2611.10426v1
arxiv_url: https://arxiv.org/abs/2611.10426
arxiv_submitted: '2026-11-07'
arxiv_updated: '2026-11-07'
summary: 一般のprime K3曲面の拡張可能性を、Gaussian写像を用いずK3 carpetへの退化から調べる。捩った法束のコホモロジーを計算し、Picard数1のprime Fano三次元多様体の既知の分類とHilbertスキームの既約性を別の方法で導く。
abstract_en: In arXiv:2409.03960 an approach to the question of extendability of projective varieties via degeneration to ribbons was introduced, and in arXiv:2503.12661 it was used to give a new proof of optimal results on the extendability of general non-prime $K3$ surfaces and the classification of non-prime Fano threefolds. In this article we treat the prime case. We give a new proof of the optimal results on the extendability of general prime $K3$ surfaces of every genus, of the classification of prime Fano threefolds of Picard rank one due to Fano, Iskovskikh and Mukai, and of the irreducibility of their Hilbert schemes. This involves degenerations of $K3$ surfaces to ribbons on embedded rational normal scrolls, called $K3$ carpets. We compute exactly the cohomology of the twisted normal bundle of these $K3$ carpets, instead of computing coranks of Gaussian maps of the canonical curve sections. The key challenge is to analyze the coboundary map of the sequence relating the normal bundle
  of the $K3$ carpet to the normal bundle of the scroll. We give a deformation theoretic interpretation of this map. Given such a $K3$ carpet and its hyperplane section, which is a canonical ribbon, we show that the coboundary map corresponds to the obstruction to lifting a first order deformation of the underlying scroll fixing the underlying rational normal curve to a first order deformation of the $K3$ carpet fixing the canonical ribbon. To compute the obstruction, we use a result on extensions of non-split ribbons on any curve to a unique $K$-trivial carpet in a canonical way.
summary_en: ''
abstract_ja: 一般のprime K3曲面を有理正規scroll上のK3 carpetへ退化させ、捩った法束のコホモロジーを直接計算する。境界写像を一次変形の持ち上げ障害として解釈することが新しい手法の中心である。これにより拡張可能性の最適な結果と、prime Fano三次元多様体の分類・Hilbertスキームの既約性をGaussian写像なしに再証明する。
abstract_source_url: https://arxiv.org/abs/2611.10426
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.10426v1](https://arxiv.org/abs/2611.10426)
- **著者:** Jayan Mukherjee, with an appendix written jointly with Anand Deopurkar
- **初回投稿日:** 2026-11-07
- **最終更新日:** 2026-11-07
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

射影空間内の曲面が、より高次元の多様体の線形切断として実現できるかという拡張可能性は、Fano多様体の分類と結び付く。一般のprime K3曲面についての最適な結果は知られているが、従来の議論では超平面切断曲線のGaussian写像が重要な役割を果たした。

本論文はK3曲面を有理正規scroll上の二重構造へ退化させ、法束のコホモロジーを直接計算する。非primeの場合に先行研究で用いられた方法をprimeの場合へ進める際、通常のコホモロジー計算だけでは制御できない境界写像を、変形の持ち上げ障害として捉える。

得られる結果はFano、Iskovskikh、Mukaiらの分類を置き換える新しい分類表ではなく、その別証明である。法束の数値を明示することで、K3曲面の非拡張性とFano三次元多様体のHilbertスキームの既約性を同じ方法から導く。

## 背景と問題設定

$X\subset\mathbb P^M$が$k$-拡張可能とは、錐でない$W\subset\mathbb P^{M+k}$が存在し、$X=W\cap\mathbb P^M$、$\dim W=\dim X+k$で、$W$が$X$に沿って滑らかであることをいう。

中心となる数値は

$$
\alpha(X)=h^0(N\_{X/\mathbb P^M}(-1))-M-1
$$

である。既知のZak–Lvovskyの判定（Theorem 1.2）は、滑らかで既約・非退化かつ二次曲面でない$X$について、$\alpha(X)\leq0$なら非拡張とする。高次拡張の排除には$\alpha(X)<M$または$H^0(N\_{X/\mathbb P^M}(-2))=0$という追加条件を用いる。

## 主結果

### 主定理1：K3 carpetの計算（Theorem 1.3）

$Y=\mathbb F\_e$を$H=C\_0+bf$で$\mathbb P^M$に埋め込み、$e\geq0$、$b\geq e+2$、$M=2b-e+1$とする。$\widetilde Y$をそのK3 carpet、$\widetilde H=\mathcal O\_{\widetilde Y}(1)$と書く。$b\geq e+3$または$(e,b)=(1,3)$なら

$$
\alpha(\widetilde Y)=h^0(\mathcal O\_Y(-H-2K\_Y))
=h^0(\mathcal O\_Y(3C\_0+(2e+4-b)f))
$$

であり、これは$b\geq2e+5$のとき、かつそのときに限り0となる。また

$$
h^0(N\_{\widetilde Y/\mathbb P^M}(-2\widetilde H))
\leq h^0(\mathcal O\_Y(-2H-2K\_Y))
$$

を得る。特に$b\geq e+3$では左辺は0、$(e,b)=(1,3)$では高々1である。

### 主定理2：一般のprime K3曲面（Theorem 1.4）

$X\subset\mathbb P^g$を種数$g\geq6$の一般のprime K3曲面とする。これは原始的なvery ample線束$B$、$B^2=2g-2$の完全線形系による埋め込みである。

| $g$ | 6 | 7 | 8 | 9 | 10 | 11 | 12 | $g\geq13$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\alpha(X)$ | 10 | 8 | 6 | 4 | 3 | 0 | 1 | 0 |

さらに$g\geq7$では$H^0(N\_{X/\mathbb P^g}(-2))=0$、$g=6$ではその次元は1となる。特に$g=11$または$g\geq13$では$X$は拡張できない。「一般」という仮定を外した全K3曲面の主張ではない。

### Fano三次元多様体への帰結（Corollary 1.5、Theorem 1.6）

$X$上の錐$C(X)\subset\mathbb P^{g+1}$におけるHilbertスキームの接空間は

$$
\dim T\_{[C(X)]}=18+(g+1)^2+(g+1)+\alpha(X)
+h^0(N\_{X/\mathbb P^g}(-2))
$$

という次元を持つ。これを用い、反標準完全線形系で埋め込まれたPicard数1、指数1、種数$g\geq6$の滑らかなFano三次元多様体の族$V\_g$について、$g=11$または$g\geq13$なら空、$6\leq g\leq10$または$g=12$なら既約で、既知のFano–Iskovskikh族が稠密開集合をなすことを再証明する。

### 技術的な新要素（Theorem 1.7）

滑らかな曲線$C$上の非分裂ribbon $\widetilde C$を取り、その制限余接束$V=\Omega\_{\widetilde C}|\_C$の商$V\to K\_C$から$C\hookrightarrow\mathbb P(V)$を得る。この埋め込みを拡張し、余法束上で恒等写像を誘導する$K$-自明carpetは一意に存在する。種数0の標準ribbonの場合、これが対応する有理正規scroll上のK3 carpetの超平面切断になる。

## 証明の見取り図

退化と半連続性により、一般の滑らかなK3曲面の数値をcarpetで上から抑える。3つの完全列で法束の計算をscrollへ移すが、最後に境界写像の全射性が残る。

その写像を、超平面切断を固定したscrollの変形から標準ribbonの変形への写像の微分と解釈する。Theorem 1.7に基づく局所切断が微分の全射性を与え、余核の寄与を消す。得た数値を既知の拡張判定とHilbertスキームの議論に適用する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.10426)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.10426v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.2–1.4, 1.6, 1.7; Corollary 1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.10426v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
