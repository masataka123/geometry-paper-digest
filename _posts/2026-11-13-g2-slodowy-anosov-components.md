---
layout: paper
title: '$G_2''$-Slodowy Slices II: Anosov Representations'
title_ja: G2のHiggs束から構成するAnosov表現の異種成分
authors: Colin Davalo, Parker Evans
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.GT
arxiv_abstract: We find \emph{exotic} connected components of Anosov representations of surface groups in the higher rank group $G=G_2'$ that are neither $ι$-Fuchsian deformations nor higher rank Teichmüller spaces. These representations are found through the non-abelian Hodge correspondence via $G_2'$-Higgs bundles that we call \emph{$α$-bundles} and \emph{$β$-bundles}, which are particular cyclic Higgs bundles in the Slodowy slices of the $\mathfrak{sl}_2$-triples associated to the simple roots $α$ and $β$ of $\mathfrak{g}_2^{\mathbb{C}}$. We first prove that (most) $β$-bundles that are also Hodge bundles are $P_β$-Anosov and $α$-bundles are $P_α$-Anosov. The strategy employed is new, geometric, and general. For $σ\in \{α, β\}$, we then show the locally homogeneous $(G_2', G_2'/P_σ)$-manifold ${\mathscr{M}}_σ(ρ)$ recently described in arXiv:2510.12757, for the representation $ρ:π_1S\rightarrow G_2'$ associated to a $σ$-bundle, coincides up to finite cover with the corresponding geometric
  structure for $ρ$ defined via domains of discontinuity by Guichard-Wienhard and Kapovich-Leeb-Porti. Consequently, we find that $π_1({\mathscr{M}}_σ(ρ))$ is an invariant for the connected component of $ρ$ in the space of $P_σ$-Anosov representations. After verifying the folklore result that the $G_2'$-character variety has exactly three connected components, we conclude lower bounds for the number of connected components of $P_σ$-Anosov representations in the two non-Hitchin components, most of which are exotic.
topic: differential-geometry
tags:
- higgs-nonabelian-hodge
- moduli
- fundamental-groups
arxiv_id: 2611.14503v1
arxiv_url: https://arxiv.org/abs/2611.14503
arxiv_submitted: '2026-11-10'
arxiv_updated: '2026-11-10'
summary: 分裂実型G2の巡回Higgs束からAnosov曲面群表現を構成し、非Hitchin成分内に多数のAnosov連結成分があることを示す。射影空間の錐の入れ子構造でAnosov性を証明し、対応する幾何構造の基本群で成分を区別する。
abstract_en: ''
summary_en: Nonabelian Hodge theory does not by itself reveal which representations are Anosov. Davalo and Evans extract this dynamical property from nested projective cones attached to particular cyclic Higgs bundles for split real G2. They then use the topology of associated geometric structures to separate components within the Anosov locus. Their component bounds distinguish this locus from the much coarser decomposition of the full character variety.
abstract_ja: 非可換Hodge対応を通じて、G2の二つのSlodowy切片に属するHiggs束を表現の幾何と結び付ける。長根側の束と、短根側の一定のHodge束についてAnosov性を示す。幾何的に構成した多様体と不連続領域の商を有限被覆まで比較することで、線束の次数からAnosov表現空間の成分を区別する。非Hitchinな二つの成分の内部に、Fuchsian表現からの変形では得られない成分を多数見いだす。
abstract_source_url: https://arxiv.org/abs/2611.14503
license_name: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
license_url: http://creativecommons.org/licenses/by-nc-nd/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.14503v1](https://arxiv.org/abs/2611.14503)
- **著者:** Colin Davalo, Parker Evans
- **初回投稿日:** 2026-11-10
- **最終更新日:** 2026-11-10
- **主分類・副分類:** math.DG（主分類）; math.GT
- **ライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

Higgs束から非可換Hodge対応によって曲面群表現を得ても、その表現が離散・忠実であるか、さらにAnosov性を持つかを読み取ることは容易ではない。本論文は分裂実型 $G\_2'$ の特定の巡回Higgs束に対して、この橋渡しを行う。

対象は長い単純根 $\alpha$ と短い単純根 $\beta$ のSlodowy切片に属する二つの族である。長根側では全ての対象に、短根側では追加条件を満たす対象にAnosov性を証明する。調和計量と零にならないHiggs場の一部分から、測地流に沿って入れ子になる射影的な錐を作る方法が中心となる。

さらに、その表現に付随する局所等質幾何構造と、不連続領域の商から作る幾何構造を比較する。基本群を使うことでAnosov表現の連結成分を区別でき、全指標多様体では同じ非Hitchin成分に入る表現が、Anosov性を保ったままでは互いに変形できないことを示す。

## 背景と問題設定

$S$ を種数 $g\geq2$ の閉曲面、$\Sigma=(S,J)$ をRiemann面とする。$\alpha$-束は正則線束 $T$ と切断 $\beta\in H^0(T^{-1}K)$、$\delta\in H^0(T^3K^3)$ を含むデータであり、$\beta$-束は線束 $B$ と $\alpha\in H^0(B^{-1}K^3)$、$\delta\in H^0(B^2)$ を含む。以下の条件はこの論文で定義された束の族の範囲で理解する。

$P\_\alpha,P\_\beta$ は対応する放物部分群である。Anosov性は旗多様体の境界写像に強い収縮性を課す条件であり、離散・忠実性を含意する。全表現の指標多様体の成分と、その中のAnosov開部分の成分は異なる対象となる。

## 主結果

### Anosov性の判定（Theorem A）

多重安定な $\alpha$-Higgs束に対応する表現は $P\_\alpha$-Anosovである。多重安定な $\beta$-Higgs束では、$\delta=0$、または $\alpha=0$ かつ $\delta$ が少なくとも一つ零点を持つ場合に $P\_\beta$-Anosovとなる。後者の制限を取り除いたすべての $\beta$-束について主張しているわけではない。

### 二つの幾何構造の比較（Theorem B）

多重安定な $\sigma$-Hodge束について、$\sigma=\beta$ の場合には $\deg B\neq0$ を仮定する。このとき束から作る展開写像の像はAnosov表現の不連続領域に一致し、展開写像は有限被覆となる。その結果、束から構成した局所等質多様体は不連続領域の商の有限被覆になる。Hodge束という追加条件は $\mathbb C^\ast $ 作用の固定点を意味する。

### 錐の入れ子性（Theorem C）

Theorem Aと同じ束の条件の下で、普遍被覆上に負曲率計量と錐 $C(v)$ を構成し、その測地流 $G\_t$ に対して
$$
C(G\_tv)\subset C(v),\qquad t>0
$$
を得る。$v$ が境界点 $x$ に向かうなら、対応するAnosov極限写像は
$$
\mathbb P(\xi^\sigma(x))=\bigcap\_{t>0}C(G\_tv)
$$
で記述される。錐は、調和計量を引力方向と斥力方向で異なる符号にした双線形形式から作る。

### 次数による成分の分離（Theorem D）

$\alpha$-束の空間から $P\_\alpha$-Anosov表現空間への非可換Hodge写像は、連結成分の水準で単射となる。$\beta$-束についても、$\delta=0$ または $\alpha=0$ かつ $\deg B\neq0$ を満たす部分空間からの写像が同じ性質を持つ。

$\alpha$-束の成分は $-2g+2\leq d=\deg T\leq2g-2$、$\beta$-束の成分は $0\leq d=\deg B\leq6g-6$ で番号付けされる。後者の $d=0$ は $P\_\beta$-Anosov表現を含む対象から除かれる。

### 非Hitchin成分内の定量的下界（Theorem E）

指標多様体は $C\_0\sqcup C\_1\sqcup C\_{\mathrm{Hit}}$ の三成分を持つ。各非Hitchin成分に含まれるAnosov表現の成分数について
$$
\begin{array}{c|cc}
 & C\_0 & C\_1\\
P\_\alpha\text{-Anosov} & \geq2g-2 & \geq2g-2\\
P\_\beta\text{-Anosov} & \geq3g-4 & \geq3g-3
\end{array}
$$
を得る。対象の表現が $C\_0$ に入ることは $d$ が偶数であることと同値である。これらの多くはFuchsian表現からAnosov性を保って変形したものではなく、全指標多様体の成分としての高次Teichmüller空間でもない。

### Frenet枠の極限（Theorem F）

対応する直交分解を $(L\_p,T\_p,N\_p,B\_p)$ とする。$\beta$ 側はHodge束で $\delta$ が零点を持つと仮定する。$p\to x\in\partial\pi\_1S$ に対し、$\alpha$ 側では $T\_p,N\_p\to\xi^2(x)$、$L\_p\oplus T\_p\oplus B\_p$ と $L\_p\oplus N\_p\oplus B\_p$ は $\xi^5(x)$ に収束する。$\beta$ 側では
$$
L\_p\to\xi^1(x),\quad L\_p\oplus B\_p\to\xi^3(x),\quad
T\_p\oplus N\_p\to\xi^4(x),\quad T\_p\oplus N\_p\oplus B\_p\to\xi^6(x).
$$
幾何的な枠の退化から、抽象的な境界写像を具体化する結果である。

## 証明の見取り図

Slodowy切片の零にならない1形式と調和計量から射影空間内の錐を作り、入れ子性によりAnosov性を得る。極限集合の位置を錐で制御して、幾何構造の展開像が所望の不連続領域になることを示す。最後に適切な被覆の基本群が曲面群の整数中心拡大として現れることを使い、線束の次数を成分の不変量へ変換する。単なるAnosov性の存在証明から、その空間の位相的な分解まで進む点が特徴である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.14503)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.14503v1) — Section 0, pp. 2–8（Abstract p. 1）
- **Introduction中で言及された主要結果:** Theorems A–F
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.14503v1
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)
- **source\_scope:** Abstract and Introduction
