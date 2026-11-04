---
layout: paper
title: Calabi flow on polarized Kähler surfaces
title_ja: 偏極曲面上のCalabi流の極限とK安定性
authors: Haozhao Li, Bing Wang, Kai Zheng
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
arxiv_abstract: We study global smooth Calabi flows on polarized K\"ahler surfaces $(M,L)$, assuming uniformly bounded Sobolev constants and the algebraic conditions $\chi(\mathcal O_M)=1$ and $c_1(M)\cdot c_1(L)>0$. Using the orbifold compactness theorem, we prove a uniform Bergman estimate, construct a normal test configuration for each geometric limit, and establish uniqueness of the extremal orbifold limit up to polarized holomorphic isometry. K-polystability then identifies the limit with the original surface and gives a constant scalar curvature K\"ahler metric. We also prove finite-group equivariant versions of these results. Independently of the flow, we obtain a uniform Bergman lower bound for polarized cscK surfaces with bounded volume and Sobolev constants and $|S|\leq1$. We illustrate the hypotheses with nonstationary flows near a product cscK metric on $\mathbb P^1\times\mathbb P^1$ and near Calabi's non-cscK extremal metric on the first Hirzebruch surface. Their controlled-cone
  energy inequalities follow from elementary calculations and continuity.
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- k-stability
- metric-limits
- chern-classes
arxiv_id: 2611.01968v1
arxiv_url: https://arxiv.org/abs/2611.01968
arxiv_submitted: '2026-11-01'
arxiv_updated: '2026-11-01'
summary: 偏極Kähler曲面上の大域的Calabi流について、Sobolev定数の一様評価と数値条件の下でextremal orbifold極限の一意性を示す。極限を中心ファイバーとするtest configurationを構成し、K-polystabilityから元の曲面上のcscK計量を得る。大域存在と解析的評価を仮定した結論である。
abstract_en: ''
summary_en: This paper connects geometric limits of the Calabi flow with algebraic degenerations of a polarized surface. A uniform Sobolev bound, holomorphic Euler characteristic one, and positive anticanonical degree are used to compare complete spaces of sections on the evolving and limiting surfaces. The resulting limits are unique for the fixed flow and occur as central fibers of test configurations. K-polystability then rules out a nontrivial degeneration and yields a cscK metric on the original surface.
abstract_ja: 大域的に滑らかなCalabi流をもつ偏極曲面で、Sobolev定数の一様上界、正則Euler標数1、正の反標準次数を仮定する。共通の冪でのBergman評価と完全な切断空間の比較により、幾何学的極限をtest configurationの中心ファイバーとして実現し、固定した流の極限の一意性を示す。K-semistabilityは極限をcscKにし、K-polystabilityはさらに元の曲面上の滑らかなcscK計量へ同定する。
abstract_source_url: https://arxiv.org/abs/2611.01968
license_name: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
license_url: http://creativecommons.org/licenses/by-nc-nd/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.01968v1](https://arxiv.org/abs/2611.01968)
- **著者:** Haozhao Li, Bing Wang, Kai Zheng
- **初回投稿日:** 2026-11-01
- **最終更新日:** 2026-11-01
- **主分類・副分類:** math.DG（主分類）; math.CV
- **ライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

Calabi流はKähler計量のスカラー曲率を整えるための発展方程式である。しかし長時間存在しても、極限で複素構造が変わったり、orbifold特異点が生じたりする可能性がある。本論文は偏極曲面に対し、その幾何学的極限を代数的な退化として比較する。

仮定は、流がすべての時刻で滑らかに存在すること、Sobolev定数が一様に有界であること、そして正則Euler標数と反標準次数に関する二つの数値条件である。これらの下で、共通の偏極の冪によるBergman評価と射影埋め込みを構成する。

著者らは、各幾何学的極限が元の偏極曲面のtest configurationの中心ファイバーになることを示す。また、固定した一つの流に対するextremal orbifold極限は、偏極を保つ正則等長同型を除いて一意になる。

K-polystabilityを加えると、その退化は積に限られ、極限は元の曲面上の滑らかなcscK計量となる。これはCalabi流の解析的な収束とK安定性を結ぶ結果であり、解析的仮定なしにすべてのK-polystable曲面のCalabi流の大域存在を示す主張ではない。

## 背景と問題設定

$(M,L)$を滑らかな連結偏極複素曲面とし、$\Omega=c\_1(L)$とおく。流の規約は

$$
[\omega(t)]=2\pi\Omega,\qquad\partial\_t\omega=\sqrt{-1}\partial\bar\partial S
$$

であり、$S$はRiemannスカラー曲率の半分に当たる複素スカラー曲率である。体積形式は$dV=\omega^2/2$とする。主要な仮定は

$$
\sup\_{t\geq0}C\_S(\omega(t))<\infty,\qquad\chi(\mathcal O\_M)=1,\qquad c\_1(M)\cdot c\_1(L)>0
$$

である。Sobolev評価はorbifold部分列極限を得る解析的入力であり、数値条件は極限のコホモロジーとHilbert多項式を比較する代数的入力となる。

先行する同著者らのコンパクト性定理だけでは、異なる部分列極限が同じものか、元の複素曲面と一致するかは決まらない。本論文は偏極の切断空間を用いてこの不足を補う。

## 主結果

### 共通のBergman評価、極限の一意性と安定性（Theorem 1.1）

上の仮定を満たす大域的Calabi流に対し、共通の正整数$r$と$0<b\leq B<\infty$が存在し、$L^r$の完全なL2正規直交基底から定めるBergman関数は

$$
b\leq\rho\_{r,t}(x)\leq B\qquad(t\geq0,\ x\in M)
$$

を満たす。各orbifold極限の偏極の$r$乗は、粗い空間$Z$上のvery ample Cartier線束$A\_Z$へ降下する。切断の極限は部分空間だけでなく、極限上の完全な切断空間を回復する。

各偏極極限$(Z,A\_Z)$は、指数$r$の正規かつ相対的ampleなtest configurationの中心ファイバーとなる。極限が非cscKならDonaldson–Futaki不変量を負に、cscKなら零に選べる。

さらに、一つの固定した流がもつ偏極extremal orbifold極限は正則等長同型を除いて一意である。二つの極限の間には

$$
F:Z\_1\longrightarrow Z\_2,\qquad F^\ast A\_2\cong A\_1,\qquad F^\ast\omega\_2=\omega\_1
$$

を満たすorbifold双正則写像が存在する。流はこの同値類へ幾何学的に収束し、距離空間としてもGromov–Hausdorff収束する。

$(M,L)$がK-semistableならば極限のスカラー曲率は定数になるが、特異点はまだ残り得る。K-polystableならば極限は滑らかであり、

$$
F:(M,L^r)\cong(Z\_\infty,A\_\infty),\qquad\omega\_{\mathrm{cscK}}=F^\ast\omega\_\infty,\qquad[\omega\_{\mathrm{cscK}}]=2\pi c\_1(L)
$$

が得られる。ここでの一意性は固定した流についてのものであり、異なる初期計量、泡の木、test configurationそのものの一意性を主張していない。

### 対称性と流から独立した評価

Introductionでは、有限群が偏極に作用し初期計量を保つ場合の同変版も述べられる。対称性を保つ埋め込みとtest configurationを使えるため、該当する同変退化について安定性を調べる応用がある。

またBergman評価の議論は、流とは独立に、体積とSobolev定数が有界で$|S|\leq1$を満たす偏極cscK曲面の族にも適用される。Introductionではこの形で一様下界が説明されており、後続節の詳細な定数や定理の仮定をここで補ってはいない。

## 証明の見取り図

まずorbifoldの局所群の位数をSobolev評価で制御し、共通の冪の偏極をCartier線束へ降下させる。数値条件からHilbert多項式を一致させ、Matsusaka型の定理で共通のvery ample冪を選ぶ。切断空間の次元一致により、幾何学的極限とHilbert極限を比較できる。

Bergman下界では、極限の有限個の特異点を避けるample因子を選び、その切断を近似する。零因子の連結性と切断ノルムの最小値原理が例外領域での下界を与え、Ricci曲率の下界に依存するHörmander評価を使わずに進める。

次に切断のGram行列を通じて流を有限次元の作用に写す。Futaki–Mabuchiの有理性とHilbert極限集合の連結性を用いてtest configurationを構成し、固定orbifold上のextremal計量の一意性から偏極計量の極限を同定する。K安定性は最後にDonaldson–Futaki不変量の符号を介して、退化の行き先を制限する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.01968)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.01968v1) — Section 1, pp. 2–5
- **Introduction中で言及された主要結果:** Theorem 1.1; Introductionで述べられたTheorem 5.2とCorollary 5.6の位置づけ
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.01968v1
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)
- **source\_scope:** Abstract and Introduction
