---
layout: paper
title: Indeterminacy of period map and Griffiths heights for hypersurfaces
title_ja: 超曲面の周期写像の不定性とGriffiths高さ
authors: Sung Gi Park
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove that the period map $\overline {\mathcal P}$, from the GIT moduli space of degree $d$ hypersurface $X$ in $\mathbb P^n$ to the Baily-Borel compactification of the period image associated to the middle cohomology $H^{n-1}_{\rm prim}(X,\mathbb Z)$, extends regularly to $X$ if and only if $X$ has at worst nodal singularities (resp. suspensions of slc surface singularities) when $n$ is even (resp. $n$ is odd). This verifies and generalizes Laza-O'Grady's prediction on the indeterminacy locus of the period map for quartic K3s to arbitrary hypersurfaces. For Calabi-Yau hypersurfaces, we prove that the birational map from the GIT moduli space to the BBH compactification extends regularly to $X$ if and only if $X$ has semi-log canonical singularities. The results apply to distinguish the Baily-Borel and BBH compactifications. In the process, we answer two questions of Mordant on the Griffiths height for families of hypersurfaces over curves, which are crucial to the proofs
  of the main results.
topic: algebraic-geometry
tags:
- hodge-theory
- singularities
- moduli
- calabi-yau-geometry
arxiv_id: 2610.34429v1
arxiv_url: https://arxiv.org/abs/2610.34429
arxiv_submitted: '2026-10-25'
arxiv_updated: '2026-10-25'
summary: 超曲面のGITモジュライから周期像のBaily–Borelコンパクト化への写像が、どの特異点まで正則に延長するかを決定する。次元の偶奇による延長条件、Calabi–Yauの場合のBBHコンパクト化との違い、Griffiths高さとGIT高さの比較を示す。
abstract_en: ''
summary_en: The paper identifies singularities that prevent extension of a hypersurface period map at the GIT boundary. The answer depends on the parity of the ambient dimension and differs from the criterion for the BBH model of Calabi–Yau moduli. Height comparisons over curves detect the same indeterminacy through a sharp equality condition. These results extend the boundary picture familiar from quartic K3 surfaces to general degrees and dimensions.
abstract_ja: 射影空間内の超曲面に対する周期写像の定義域を、偶数次元の周囲空間ではnode、奇数次元ではsemi-log canonical曲面特異点のsuspensionにより記述する。Calabi–Yau超曲面のBBHモデルへの写像はsemi-log canonical locus全体へ延長する。Griffiths高さとGIT高さの二方向の比較を証明し、上側評価の等号条件を周期写像の定義域と結び付ける。
abstract_source_url: https://arxiv.org/abs/2610.34429
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.34429v1](https://arxiv.org/abs/2610.34429)
- **著者:** Sung Gi Park
- **初回投稿日:** 2026-10-25
- **最終更新日:** 2026-10-25
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな超曲面の周期写像は、その中間コホモロジーのHodge構造を記録する。モジュライをコンパクト化して特異超曲面を加えると、写像が正則に延長できない場所が現れる。本論文はこの不定性を特異点の種類で判定する。

Baily–Borel型の周期像コンパクト化への延長条件は、周囲の射影空間の次元の偶奇で異なる。一方、Calabi–Yauの場合にHodge線束から作るBBHコンパクト化では、semi-log canonical性が延長の正確な条件となる。

曲線上の族に対する二つの高さの比較が、この幾何学的な差を検出する。上側不等式で等号が成立することは、族のモジュライ像が周期写像の定義域に収まることと同値である。四次K3曲面で知られる境界の描像を、一般の次元と次数へ広げる結果である。

## 背景と問題設定

次数$d$の$X\subset\mathbb P^n$に対し、$H^{n-1}\_{\mathrm{prim}}(X,\mathbb Z)$の周期像を考える。以下、通常の周期写像の定理では$n\geq2,d\geq3,(n,d)\ne(3,3)$とする。generic Torelliはこの範囲のほとんどで既知だが、全ての場合の双有理性を無条件に前提とはしない。

slc曲面特異点のsuspensionとは、局所解析的に

$$
x\_1^2+\cdots+x\_{n-3}^2+f(x\_{n-2},x\_{n-1},x\_n)=0
$$

と書け、$\lbrace f=0\rbrace \subset(\mathbb C^3,0)$がsemi-log canonicalであるものをいう。

## 主結果

### Baily–Borelモデルへの延長（Theorem 1.1）

GITモジュライから周期像のBaily–Borelコンパクト化への周期写像の定義域は、$n$が偶数なら高々nodeを持つ超曲面のlocus、奇数なら上記slc曲面特異点のsuspensionを持つlocusに一致する。

最小指数によれば、条件はそれぞれ

$$
\widetilde\alpha(X)\geq\frac n2\quad(n\text{ 偶数}),\qquad
\widetilde\alpha(X)\geq\frac{n-1}{2}\quad(n\text{ 奇数})
$$

となる。統一的には$(\lfloor n/2\rfloor-1)$-Du Bois特異点の条件である。

### Calabi–YauとBBHモデル（Theorem 1.2）

$d=n+1,n\geq2$では、GITからBBHへの有理写像の定義域はslc超曲面のlocusに正確に一致する。さらに$n\geq4$では、周期写像のStein分解側からBBHへの射はcanonical超曲面のモジュライ上で因子的収縮となり、周期空間の内部へ一般点が写る例外因子も収縮する。したがって二つのコンパクト化は単なる境界の呼び替えではない。

### コンパクト化しない周期空間（Corollary 1.3）

標的を周期空間そのものにすると、定義域は偶数$n$では滑らかな超曲面、奇数$n$では高々simple ADE特異点の超曲面となる。Calabi–Yauの場合、周期像へのStein分解はこの定義域上で開埋め込みとなる。

### 高さの比較と等号条件（Theorem 1.5）

滑らかな射影曲線$C$の一般点$\eta$上の滑らかな次数$d$超曲面$H\_\eta$について、Griffiths束の次数を$h\_{\mathrm{GK}}$、GIT偏極の引き戻しの次数を$h\_{\mathrm{GIT}}$と略記すると、正の定数$\epsilon(n,d)$が存在して

$$
\epsilon(n,d)h\_{\mathrm{GIT}}\leq h\_{\mathrm{GK}}\leq F(n,d)h\_{\mathrm{GIT}}
$$

となる。右側の定数は

$$
F(n,d)=\frac{n+1}{24d^2}
\begin{cases}
(d-1)^n(d^2n-d^2-2dn-2)+2(d^2-1)&n\text{ 奇数},\cr
(d-1)^n(d^2n+2d^2-2dn-2)-2(d^2-1)&n\text{ 偶数}.
\end{cases}
$$

右側で等号となるのは、$C$のGITモジュライ像がTheorem 1.1の周期写像の定義域に含まれる場合に限る。左側の最適定数を求めることは、Introductionで今後の問題として挙げられる。

## 証明の見取り図

IntroductionはGriffiths高さとGIT高さの比較を主定理の鍵として位置づける。nodeしかない族での既知の等式を、不等式と厳密な等号条件へ拡張し、不定性を数値的に検出する。本文の構成はhigher Du Bois特異点による延長、極限混合Hodge構造、高さの計算、孤立特異点への帰着へ進むが、ここでは後続節の証明を新たに再構成しない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.34429)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.34429v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1–1.2, 1.5；Corollary 1.3；equation (1.4)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.34429v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
