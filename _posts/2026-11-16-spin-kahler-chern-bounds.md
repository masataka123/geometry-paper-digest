---
layout: paper
title: Vector bundles on spin Kähler surfaces and the multi-spinor Seiberg-Witten equations
title_ja: スピンKähler曲面上の束の第二Chern類と多スピノルSeiberg–Witten方程式
authors: Minh Lam Nguyen, Ollie Thakar
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
- math.GT
arxiv_abstract: We compute new lower bounds on the second Chern class of a vector bundle $\mathscr{E}$ on a spin Kähler surface $X$ that satisfies $c_1(\mathscr{E}) = 0$ and $H^2(\text{End}_0\mathscr{E}) = 0.$ When $X$ is a regular elliptic surface and $\mathscr{E}$ has rank 2, our bound is sharp. Our technique is to use Furuta's finite-dimensional approximation on the multi-spinor Seiberg-Witten equations, together with their algebro-geometric interpretation by the second named author. We also use these techniques to prove an existence theorem for singular Fueter sections and multi-spinor Seiberg-Witten solutions that holds for every Riemannian metric on a large class of 4-manifolds.
topic: algebraic-geometry
tags:
- chern-classes
- vector-bundles-sheaves
- stability
arxiv_id: 2611.17647v1
arxiv_url: https://arxiv.org/abs/2611.17647
arxiv_submitted: '2026-11-13'
arxiv_updated: '2026-11-13'
summary: スピンKähler曲面上で変形の障害が消える正則ベクトル束について、第二Chern数に位相的下界を与える。階数2では符号数による下界を示し、正則な楕円曲面では安定束についてもその下界が達成される。多スピノルSeiberg–Witten方程式のコンパクト性を用いて、束の存在問題を同変位相へ結びつける。
abstract_en: ''
summary_en: The obstruction space for deforming a holomorphic bundle is used here to constrain its second Chern number. On spin Kähler surfaces, equivariant gauge theory supplies a lower bound involving the signature. Regular elliptic surfaces provide cases in which stable bundles attain the bound. The introduction also explains how failure of a related topological inequality forces solutions and singular limits of multi-spinor equations.
abstract_ja: 第一Chern類が零で、トレース零自己準同型束の第二コホモロジーが消える正則束を対象に、スピンKähler曲面の符号数から第二Chern数を評価する。階数2の評価は、標準類が偶数で不正則数が零の偏極楕円曲面において最良となる。自己双対束にも階数に応じた評価を与える。手法は多スピノルSeiberg–Witten方程式への有限次元近似であり、その応用として特異Fueter切断などの存在も論じる。
abstract_source_url: https://arxiv.org/abs/2611.17647
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.17647v1](https://arxiv.org/abs/2611.17647)
- **著者:** Minh Lam Nguyen, Ollie Thakar
- **初回投稿日:** 2026-11-13
- **最終更新日:** 2026-11-13
- **主分類・副分類:** math.AG（主分類）; math.DG, math.GT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

束の階数と第一Chern類を固定したとき、第二Chern数をどこまで小さくできるかは、束の存在とモジュライ空間の構造に関わる問題である。本論文は、コンパクトなスピンKähler曲面上で $c\_1(E)=0$ と $H^2(X,\operatorname{End}\_0E)=0$ を満たす束に注目する。後者は安定束のモジュライ空間が期待次元で滑らかとなるための条件である。

著者らは階数2について符号数から決まる新しい下界を与え、標準類が偶数の正則楕円曲面ではその値を正確に計算する。存在する束を大量に構成する上界の問題とは異なり、小さすぎる第二Chern数を持つ束が存在しないことを示す結果である。自己双対性を仮定すると、任意階数についても下界が得られる。

証明は代数幾何の条件をゲージ理論の解空間のコンパクト性へ移し、Furutaの有限次元近似と同変K理論を適用する。スピンという仮定はこの対称性に関わり、単に極小曲面であるという条件には置き換えられない。

## 背景と問題設定

$\operatorname{End}\_0E$ はトレース零自己準同型束である。論文は $H^2(X,\operatorname{End}\_0E)=0$ を満たす束をgoodと呼び、階数 $r$、$c\_1(E)=0$ のgoodな正則束が持ちうる第二Chern数の最小値を $n\_r(X)$ と書く。偏極 $\omega$ に関する安定性も要求した最小値が $n\_r(X,\omega)$ である。コンパクトKähler多様体では、スピン性は標準類 $K\_X$ が偶数であることと同値である。

TaubesとO’Gradyの仕事により、関連する存在問題と最小値の有限性が研究されてきた。ここでの新しい方向は、変形障害の消滅が第二Chern数に強制する下界である。

## 主結果

### 主定理1（Theorem 1.3）

コンパクトなスピンKähler曲面 $X$ では

$$
n\_2(X)\geq-\frac{\sigma(X)}4=2\chi(\mathcal O\_X)-\frac14c\_1(X)^2.
$$

ここで $\sigma(X)$ は符号数であり、Chern類の二乗は曲面上で積分したChern数を表す。この定理の $n\_2(X)$ は安定性を別途課さないgoodな束についての最小値である。したがって、安定束だけに関する主張へ狭めて読む必要はない。

### 主定理2（Theorem 1.4）

$(X,H)$ を偏極楕円曲面とし、$h^1(\mathcal O\_X)=0$、$K\_X$ が偶数、$H$ が豊富な直線束であるとする。このとき

$$
n\_2(X)=n\_2(X,H)=2p\_g(X)+2.
$$

$p\_g(X)=h^2(\mathcal O\_X)$ である。下界だけでなく、それを達成する安定束の存在まで含めて最小値を決定している。Introductionは非スピンのDolgachev曲面を挙げ、スピン仮定を除くと符号数による下界が破れることを説明する。

### 主定理3（Theorem 1.7）

$X$ をスピンKähler曲面、$E$ をgoodな階数 $r$ の正則束とし、正則同型 $E\simeq E^\vee$ を仮定する。このとき

$$
c\_2(E)\geq-\frac{r\sigma(X)}8
 =r\left(\chi(\mathcal O\_X)-\frac18c\_1(X)^2\right).
$$

任意の束にこの評価を適用するのではなく、自己双対性が追加仮定となる。

## 証明の見取り図

多スピノル方程式には補助束と補助接続が入る。Introductionによれば、反自己双対接続の変形複体で第二コホモロジーが消えることが解空間のコンパクト性を与える。スピン構造と実構造による $\operatorname{Pin}(2)$ 対称性のもと、無限次元方程式を有限次元の同変写像へ近似する。同変指数定理で表現の重複度を位相量として計算し、同変K理論の制約をChern数の不等式へ戻す。

別の応用では、コンパクト性から導かれる位相的不等式が破れる場合に、解空間の非コンパクト性を強制する。その再スケール極限を用いて特異Fueter切断の存在へ進む。Introductionはこの応用を概説するが、ここでは後続のTheorem 5.4の細かな仮定を補っていない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.17647)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.17647v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.3, 1.4, 1.7；Theorem 1.8は先行研究
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.17647v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
