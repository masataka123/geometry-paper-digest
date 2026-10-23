---
layout: paper
title: Continuation and convergence for the higher dimensional conformal Chern--Calabi flow
title_ja: 高次元の共形Chern–Calabi流の継続と収束
authors: Hongyu Chen, Li Ma, Li Sheng
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AP
- math.DG
arxiv_abstract: We study the volume-normalized gradient flow of the squared Chern scalar curvature on compact Hermitian manifolds of complex dimension $n\ge3$. The flow extends smoothly past a finite time if the spatial supremum of Chern scalar curvature belongs to $L^2$ in time. A uniform curvature bound in the evolving $L^p$ norm, for one fixed $p>n$, gives global existence and smooth convergence of the whole trajectory to a constrained critical metric. On Chern scalar-flat backgrounds, small initial $L^p$ curvature gives exponential convergence to the background. A corresponding condition on the trace-free first Chern--Ricci form gives exponential convergence on Chern--Ricci-flat Hermitian and positive K\"ahler--Einstein backgrounds. The smallness thresholds are independent of the initial higher derivatives. We also construct constant Chern scalar curvature backgrounds of either sign with arbitrarily small smooth perturbations whose solutions, if global, cannot converge back to the background.
topic: several-complex-variables
tags:
- curvature
- kahler-einstein-metrics
arxiv_id: 2610.31270v1
arxiv_url: https://arxiv.org/abs/2610.31270
arxiv_submitted: '2026-10-22'
arxiv_updated: '2026-10-22'
summary: 複素次元3以上のコンパクトHermitian多様体で、Chernスカラー曲率の二乗積分の共形勾配流を研究する。曲率の時間積分条件から有限時刻を越える継続を、発展計量に関するLp評価から大域存在と全軌道の滑らかな収束を導く。特別な背景計量への指数収束は初期曲率の小ささを要し、一定Chernスカラー曲率だけで安定性が保証されるわけではない。
abstract_en: ''
summary_en: The flow considered here varies Hermitian metrics within a fixed conformal class while preserving volume. Curvature estimates control both the possibility of finite-time degeneration and the asymptotic behavior. The resulting limit is a critical metric for a constrained energy, which need not have constant Chern scalar curvature. Additional small-curvature assumptions select backgrounds to which the flow converges exponentially.
abstract_ja: 複素次元n≥3のコンパクトHermitian多様体上で、体積正規化したChernスカラー曲率二乗の勾配流を調べる。曲率の空間上限が時間についてL2なら有限時刻を越えて延長でき、発展するLpノルムがp>nについて一様有界なら大域存在と全軌道の滑らかな収束が得られる。Chernスカラー平坦な背景では小さい初期Lp曲率から指数収束を得る。Chern–Ricci平坦または正のKähler–Einstein背景では、初期の第1 Chern–Ricci形式のトレースなし部分の小ささが同様の役割を果たす。
abstract_source_url: https://arxiv.org/abs/2610.31270
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.31270v1](https://arxiv.org/abs/2610.31270)
- **著者:** Hongyu Chen, Li Ma, Li Sheng
- **初回投稿日:** 2026-10-22
- **最終更新日:** 2026-10-22
- **主分類・副分類:** math.CV（主分類）; math.AP, math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

本論文の対象は、固定したHermitian計量を正の関数倍で変形する共形Chern–Calabi流である。体積を1に保ちながらChernスカラー曲率の二乗積分を下げる流について、どの曲率条件が時間発展の継続と収束を保証するかを調べる。

高次元では、二乗曲率汎関数に共形因子の重みが残る。そのため、曲率の導関数だけでなく、計量が退化しないことも制御する必要がある。論文は、有限時刻での継続に必要な時間積分条件と、無限時間での収束に十分な空間Lp条件を分けて与える。

さらに、特定の背景計量へ戻る安定性を、初期曲率の小ささから導く。高階微分の小ささを初期条件に要求しない点が特徴である。一方、正または負の一定Chernスカラー曲率を持つ背景にも不安定な例があり、「曲率が一定」という条件だけでは同じ結論にならない。

## 背景と問題設定

$(M^n,\omega)$は境界のない連結コンパクトHermitian多様体で、$n\geq3$とする。$d\mu=\omega^n/n!$を体積1に正規化し、$L=g^{i\bar j}\partial\_i\partial\_{\bar j}$、$R$を背景のChernスカラー曲率とする。$L^*$は固定測度$d\mu$に関する形式的随伴である。$\omega\_f=e^f\omega$に対して

$$
R\_f=e^{-f}(R-nLf),\qquad d\mu\_f=e^{nf}d\mu,
$$

$$
E(f)=\int\_M R\_f^2d\mu\_f
=\int\_M e^{(n-2)f}(R-nLf)^2d\mu,\qquad \int\_Me^{nf}d\mu=1
$$

と置く。論文の流は

$$
\partial\_t f=2ne^{-nf}L^*\negthinspace \left(e^{(n-2)f}(R-nLf)\right)
-(n-2)e^{-2f}(R-nLf)^2+(n-2)E(f)
$$

である。KählerポテンシャルのCalabi流や固定した$\partial\bar\partial$類内の流とは、変形する計量の空間が異なる。

## 主結果

### 有限時刻を越える継続（Theorem 1.1）

滑らかな解が$[0,T)$、$0<T<\infty$で存在し、初期体積が1であるとする。

$$
\int\_0^T\Vert R\_{f(t)}\Vert \_\infty^2\thinspace dt<\infty
$$

なら、ある$\delta>0$について$[0,T+\delta)$へ滑らかに延長できる。計量の正値性と体積1も保たれる。この条件は、平坦な非正規化方程式の放物型スケーリングに対し不変である。

### 大域存在と全軌道の収束（Theorem 1.2）

最大存在時間を$T\_{\max}$とする。ある固定した$p>n$について

$$
\sup\_{0\leq t<T\_{\max}}\left(\int\_M|R\_{f(t)}|^p\thinspace d\mu\_{f(t)}\right)^{1/p}<\infty
$$

なら$T\_{\max}=\infty$であり、$f(t)$はすべての$C^k$ノルムで一つの$f\_\infty$へ収束する。部分列だけの結論ではない。極限は体積制約付き臨界点で、

$$
-2nL^*\negthinspace \left(e^{(n-2)f\_\infty}(R-nLf\_\infty)\right)
+(n-2)e^{(n-2)f\_\infty}(R-nLf\_\infty)^2
=(n-2)E(f\_\infty)e^{nf\_\infty}
$$

を満たす。これは一定Chernスカラー曲率方程式と同一ではない。

### 初期曲率の小ささによる指数収束（Theorem 1.3）

背景が$R=0$で、$p>n$を固定する。十分小さい$\delta\_p>0$に対し

$$
\Vert R\_{f\_0}\Vert \_{L^p(d\mu\_{f\_0})}\leq\delta\_p
$$

なら一意な大域滑らかな解が存在し、$t\geq1$で

$$
\Vert f(t)\Vert \_{C^k(\omega)}\leq C\_{p,k}\Vert R\_{f\_0}\Vert \_{L^p(d\mu\_{f\_0})}e^{-\beta t}
$$

となる。小ささの閾値と収束率は初期の高階微分に依存しない。

### Chern–Ricci形式による安定性（Corollary 1.4）

背景が$\operatorname{Ric}^{\mathrm{Ch}}(\omega)=0$、またはKählerで$\operatorname{Ric}^{\mathrm{Ch}}(\omega)=\kappa\omega$、$\kappa>0$とする。この場合には

$$
\left\Vert \operatorname{Ric}^{\mathrm{Ch}}(\omega\_{f\_0})-\frac{R\_{f\_0}}n\omega\_{f\_0}\right\Vert \_{L^p(\omega\_{f\_0},d\mu\_{f\_0})}\leq\delta\_p
$$

が同様の大域存在・背景への指数収束を保証する。任意の一定Chernスカラー曲率背景についての主張ではない。Proposition 6.5では、正・負どちらの一定曲率にも、任意に小さい滑らかな摂動から始まる解が、大域的に存在しても背景へ戻れない例を作る。Introductionに記載された有限時間退化の結果は別論文の成果として紹介されている。

## 証明の見取り図

有限時刻の継続では、固定背景の作用素、再スケーリング、楕円型評価を使って重み付き微分評価を得る。さらに共形因子の負のモーメントを制御し、終端で計量が0になることを排除する。

収束では、$|R\_f|^nd\mu\_f=|R-nLf|^nd\mu$という恒等式から指数可積分性を得て、$p>n$の評価により一様Hölder制御へ進む。共通の局所存在時間と平滑化から軌道のコンパクト性を確保した後、解析的勾配不等式で全軌道の収束を導く。小曲率条件は共形因子の小さい上限評価を与え、局所安定性論へ接続される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.31270)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.31270v1) — Section 1、PDF pp. 1–4。
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3、Corollary 1.4、Introductionで説明されるProposition 6.5。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.31270v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
