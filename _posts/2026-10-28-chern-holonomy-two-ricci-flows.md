---
layout: paper
title: Chern holonomy under the first and second Chern--Ricci flows
title_ja: 第一・第二Chern–Ricci流に沿うholonomyの対照
authors: Yuan Liao
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We compare the Chern holonomy of the first and second Chern-Ricci flows on compact complex manifolds. For the first flow, we construct an explicit immortal pluriclosed solution on a complex two-torus with full and restricted holonomy $U(2)$, except at one finite time when both groups are $U(1)^2$; its smooth limit has holonomy $SU(2)$. The solution is uniformly nondegenerate and has bounds of every fixed differential order for all time. In contrast, the second Chern-Ricci flow preserves full and restricted Chern holonomy under the natural unitary identification, including the initial time and nonclosed groups. The proof combines preservation of a connection reduction, positive-time analyticity, and a path-transport comparison. As an application, the optimal minimum mean curvature on a holomorphic bundle is unchanged when metrics are restricted to any realizable full and restricted holonomy class. An explicit projected-curvature source explains the failure of the corresponding
  Ricci-flow holonomy argument.
topic: differential-geometry
tags:
- curvature
- vector-bundles-sheaves
arxiv_id: 2610.34665v1
arxiv_url: https://arxiv.org/abs/2610.34665
arxiv_submitted: '2026-10-26'
arxiv_updated: '2026-10-26'
summary: 非KählerのHermitian計量では、第一と第二のChern–Ricci縮約は異なる流を定める。第一の流では一様に良い長時間解でもholonomyが跳ぶ明示例を構成し、第二の流ではコンパクトな滑らかな時間区間で全holonomyとrestricted holonomyが保存されることを示す。
abstract_en: ''
summary_en: Two curvature contractions that agree for Kähler metrics behave differently for general Hermitian metrics. The paper exhibits a uniformly controlled first Chern–Ricci flow whose holonomy drops at one prescribed finite time. It proves a contrasting preservation theorem for the second flow, including full groups that need not be closed. The bundle version also shows that imposing a realizable holonomy class does not worsen the optimal lower bound for mean curvature.
abstract_ja: コンパクト複素多様体上の二種類のChern–Ricci流についてholonomyを比較する。第一の流には、複素二次元トーラス上で一つの時刻だけU(2)からU(1)²へholonomyが減少し、SU(2) holonomyの極限へ滑らかに収束するpluriclosedな長時間解がある。一方、第二の流では自然なユニタリ同一視のもとで全holonomyとrestricted holonomyが初期時刻を含めて保存される。
abstract_source_url: https://arxiv.org/abs/2610.34665
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.34665v1](https://arxiv.org/abs/2610.34665)
- **著者:** Yuan Liao
- **初回投稿日:** 2026-10-26
- **最終更新日:** 2026-10-26
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler幾何では一致する二つのRicci縮約が、一般のHermitian幾何では異なる流を生む。本論文はその差を、平行移動が生成するChern holonomy群の変化によって捉える。

第一Chern–Ricci流では、曲率・捩率とその全階微分が一様に有界であってもholonomyは保存されない。複素二次元トーラス上の明示解で、指定した有限時刻だけ群が小さくなることを計算する。

対照的に第二Chern–Ricci流では、コンパクトな滑らかな解に沿い全holonomyとrestricted holonomyが保存される。閉群性や曲率の符号を仮定せず、初期時刻も含める点が特徴である。この差は、通常のRicci流の保存論法をHermitianの場合へ無条件に移せないことを示す。

## 背景と問題設定

Chern曲率を$R\_{i\bar j k\bar l}$とすると、二つの縮約は

$$
\operatorname{Ric}^{(1)}\_{i\bar j}=g^{k\bar l}R\_{i\bar j k\bar l},\qquad
\operatorname{Ric}^{(2)}\_{i\bar j}=g^{k\bar l}R\_{k\bar l i\bar j}
$$

であり、各流は$\partial\_tg=-\operatorname{Ric}^{(a)}$で定義される。Kählerの場合は一致するが、それ以外では捩率の微分が差を生む。先行するRicci流のholonomy保存は、曲率成分と輸送された射影の閉じた斉次系に基づく。

## 主結果

### 第二の流の保存定理（Theorem 1.1）

コンパクト複素多様体上の滑らかな第二Chern–Ricci流では、

$$
\partial\_tU=\frac12\bigl(\operatorname{Ric}^{(2)}\bigr)^\sharp U
$$

で定まる時間依存のユニタリ同一視のもと、全Chern holonomy群とrestricted holonomy群が一定になる。初期時刻を含む有限時間での主張であり、群が閉じている必要はない。$T^{1,0}M$とその双対から作る平行な正則テンソルは、実際の切断として不変である。

### 第一の流の明示的反例（Theorem 1.2）

任意の$\tau>0$に対し、複素二次元トーラス上に、全時間存在するpluriclosedな第一Chern–Ricci流があり、全holonomyとrestricted holonomyはいずれも

$$
\operatorname{Hol}(g(t))=\operatorname{Hol}^0(g(t))=
\begin{cases}U(2)&t\ne\tau,\ t<\infty,\cr U(1)^2&t=\tau\end{cases}
$$

となる。滑らかな極限計量の両holonomy群は$SU(2)$であり、曲率と捩率の空間・時間微分は各階で一様に有界である。

構成の核は

$$
P\_s(x)=\frac{\sinh s}{\cosh s+\cos x},\qquad\partial\_sP\_s=(\log P\_s)''
$$

である。$s\_0>0$、$S=s\_0+\tau/4$、$B>\max P\_S$を選び、$d(x)=\sqrt{B^2-BP\_S(x)}$として

$$
g(t)=\begin{pmatrix}P\_{s\_0+t/4}+d^2/B&d\cr d&B\end{pmatrix}
$$

を用いる。行列式が$BP\_{s\_0+t/4}$となり、流がスカラーの恒等式に帰着する。

### 束の平均曲率への応用

Introductionでは、固定Hermitian底上の束の熱流にも保存の議論が適用され、任意の実現可能な全・restricted holonomyのクラス内で、平均曲率の最適下界へ近づけると述べる。最適値がそのクラスで達成されることまでは主張しない。

## 証明の見取り図

第二の流では接続のreductionの前向き保存、正時間での解析性、経路に沿う平行移動の比較を組み合わせ、初期時刻は別に扱う。第二縮約が底の添字をtraceするため、複素化holonomy Lie代数に入ることが要点となる。

第一の流の例では、特別な時刻に二つの一定固有方向が平行となり、それ以外では曲率の交換子が非可換方向を生成する。Introductionは既存のHopf例にも孤立時刻での減少があったことを明示し、今回の新しさを不死性・一様非退化性・全階評価と極限の厳密な群計算に置く。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.34665)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.34665v1) — Section 1, pp. 1–3（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1–1.2；equations (1.1)–(1.2)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.34665v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
