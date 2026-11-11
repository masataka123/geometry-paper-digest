---
layout: paper
title: Stratified spaces and synthetic Ricci curvature bounds
title_ja: 層状空間のRicci下界と合成的曲率次元条件
authors: J. Bertrand, C Ketterer, Ilaria Mondello, T. Richard
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We prove that a compact stratied space satises the Riemannian curvature-dimension condition RCD(K, N) if and only if its Ricci tensor is bounded below by K $\in$ R on the regular set, the cone angle along the stratum of codimension two is smaller than or equal to 2$\pi$ and its dimension is at most equal to N. This gives a new wide class of geometric examples of metric measure spaces satisfying the RCD(K, N) curvature-dimension condition, including for instance spherical suspensions, orbifolds, K{\"a}hler-Einstein manifolds with a divisor, Einstein manifolds with conical singularities along a curve. We also obtain new analytic and geometric results on stratied spaces, such as Bishop-Gromov volume inequality, Laplacian comparison, L{\'e}vy-Gromov isoperimetric inequality.
topic: differential-geometry
tags:
- curvature
- metric-limits
- singularities
arxiv_id: 1804.08870v2
arxiv_url: https://arxiv.org/abs/1804.08870v2
arxiv_submitted: '2018-04-24'
arxiv_updated: '2018-06-08'
summary: コンパクトな層状空間がRCD曲率次元条件を満たすことを、正則部分のRicci曲率下界、余次元2の錐角、および次元の条件で特徴付ける。滑らかな部分での曲率制御に特異層の角度条件を加えることで、体積比較などの距離測度空間上の理論を適用できるようにする。
abstract_en: ''
summary_en: A curvature bound on the smooth part of a singular space need not by itself control its metric geometry. This work isolates the extra angle requirement needed for compact stratified spaces with iterated edge metrics. Together with a dimension bound, it makes the classical Ricci inequality equivalent to the RCD condition. The characterization brings comparison results to these spaces and has a sectional-curvature counterpart in Alexandrov geometry.
abstract_ja: 反復エッジ計量を備えたコンパクト層状空間について、正則部分と錐状特異点の情報から合成的Ricci下界を判定する。余次元2の角度が2π以下であることが、正則部分のRicci下界を空間全体のRCD条件へ結び付ける。断面曲率とAlexandrov下界にも対応する特徴付けを得る。
abstract_source_url: https://arxiv.org/abs/1804.08870v2
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:1804.08870v2](https://arxiv.org/abs/1804.08870v2)
- **著者:** J. Bertrand, C Ketterer, Ilaria Mondello, T. Richard
- **初回投稿日:** 2018-04-24
- **最終更新日:** 2018-06-08
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Ricci曲率の下界は、体積や熱流、等周問題を制御する。しかし特異点を持つ空間では、滑らかな部分にRicciテンソルが存在しても、それだけで空間全体にどのような下界が成立するかは明らかでない。本論文は、錐状の局所構造を持つコンパクト層状空間でこの問題を扱う。

結論は、正則部分のRicci下界に、余次元2の特異層に沿う錐角が2π以下という条件を加えると、距離と測度だけで定義されるRCD条件と一致するというものである。さらにRCDの次元パラメータに対し、空間の次元がそれ以下であることを要求する。これは必要条件でも十分条件でもある。

この特徴付けにより、球面懸垂、軌道体、因子に沿う錐状Kähler–Einstein計量などを合成的Ricci曲率の枠組みに位置付けられる。体積比較、Laplacian比較、等周不等式といった一般理論の結論が、これらの層状空間にも適用可能となる。

断面曲率についても、正則部分の下界と同じ錐角条件からAlexandrov曲率下界を特徴付ける。なお、RCD条件を満たすことと、滑らかなRicci下界付き多様体の非崩壊極限として実現できることは別問題であり、本論文は両者を同一視していない。

## 背景と問題設定

対象は余次元1の特異層を持たないコンパクト層状空間$X$であり、正則部分に反復エッジ計量$g$を備える。特異層の近くでは、局所的に球とリンク上の錐の積に対応する幾何を持ち、計量には論文で定める漸近条件を課す。任意の特異距離空間を扱う定理ではない。

$d\_g$を長さ距離、$v\_g$を体積測度とする。論文の意味での特異Ricci曲率下界$K$は、正則部分$X^{\mathrm{reg}}$での$\operatorname{Ric}\_g\ge K g$と、余次元2の各点の錐角$\alpha\le2\pi$からなる。高余次元の層に別の角度条件を追加する形ではない。

RCD条件は、合成的な曲率次元条件にRiemann的性質を組み込んだ距離測度空間の条件であり、Finsler的挙動を除く。測度付きGromov–Hausdorff収束との相性がよい一方、具体的な特異計量がこの条件を満たすかを直接判定するのは容易ではなかった。

## 主結果

### 主定理：RCD条件の特徴付け（Theorem A）

上記の層状空間と反復エッジ計量について、次の同値が成り立つ。

$$
(X,d\_g,v\_g)\text{ satisfies }\operatorname{RCD}(K,N)
\quad\Longleftrightarrow\quad
\begin{cases}
\dim X\le N,\\
\operatorname{Ric}\_g\ge K g\quad\text{on }X^{\mathrm{reg}},\\
\alpha\le2\pi\quad\text{along every codimension-two stratum}.
\end{cases}
$$

正則部分のテンソル不等式だけではなく、特異点を通過する幾何に関わる錐角が必要である。この条件を満たせば、空間全体でBishop–Gromov型の体積比較やLévy–Gromov型の等周不等式などが得られる。また、正則集合についてほとんど至る所での測地的凸性が導かれるが、任意の長い測地線に関する全面的な凸性を主張するものではない。

### 断面曲率への帰結（Corollary B）

同じ種類の空間について、$X$が曲率$k$以上のAlexandrov空間となることは

$$
\operatorname{Sect}\_g\ge k\quad\text{on }X^{\mathrm{reg}},
\qquad \alpha\le2\pi
$$

と同値である。Ricci曲率の定理と断面曲率の系は異なる曲率概念を扱うが、余次元2で必要となる角度制約は共通する。

## 証明の見取り図

十分性では、正則部分のBochner公式を特異空間全体の解析へ移し、Bakry–Émeryの曲率次元不等式を導く。特異集合の近くで積分と極限を正当化するため、Laplacianの固有関数の正則性が重要となり、ここに錐角の上限が現れる。その後、適切な解析的条件のもとでBakry–Émery条件とRCD条件を結ぶ既知の理論を用いる。

必要性ではRCD空間の接錐に対する安定性を利用して、正則部分の曲率と余次元2の角度を回収する。Alexandrovに関する系は、正則部分のほとんど至る所での凸性とN. Liの結果を組み合わせて得られる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/1804.08870v2)
- **Introduction:** [PDF](https://arxiv.org/pdf/1804.08870v2) — Introduction, pp. 1–4（Section 1 Preliminariesより前）
- **Introduction中で言及された主要結果:** Theorem A; Corollary B
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 1804.08870v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
