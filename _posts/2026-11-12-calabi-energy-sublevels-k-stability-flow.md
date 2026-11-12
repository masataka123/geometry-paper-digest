---
layout: paper
title: Calabi-energy sublevels, K-stability and Calabi flow
title_ja: Calabiエネルギーの劣位集合とK安定性・Calabi flow
authors: Haozhao Li, Bing Wang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: In this paper, we prove path connectedness of every nonempty strict Calabi-energy sublevel and identify the infimum of the square root of the Calabi energy over smooth metrics with the infimum of the descending Mabuchi slope in the metric completion. In particular, there exist smooth metrics of arbitrarily small Calabi energy in every K-semistable real ample class. On compact Kähler surfaces, we prove the existence of constant scalar curvature Kähler metrics in the K-polystable classes of the controlled cone. In any class containing such a metric, the Calabi flow exists smoothly for all time with a uniform Sobolev bound whenever the initial metric is smooth and has sufficiently small Calabi energy.
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- k-stability
- pluripotential-theory
arxiv_id: 2611.14189v1
arxiv_url: https://arxiv.org/abs/2611.14189
arxiv_submitted: '2026-11-10'
arxiv_updated: '2026-11-10'
summary: Calabiエネルギーの厳密劣位集合の道連結性を、滑らかな計量と有限エネルギー空間を結ぶ道具として確立する。K半安定な実豊富類でのエネルギー下限、特定の曲面の錐におけるcscK計量の存在、小エネルギーから出発するCalabi flowの長時間存在へ応用する。
abstract_en: ''
summary_en: The geometry of low-energy regions in the space of Kähler potentials is the organizing question of this work. A smooth resolvent construction connects these regions with the variational theory on the metric completion. The resulting comparison has consequences for real ample classes and for the existence problem on certain Kähler surfaces. A separate small-energy argument controls the Sobolev constant and hence the lifetime of the Calabi flow on surfaces admitting a cscK metric.
abstract_ja: この論文は、固定Kähler類に属する滑らかな計量の空間で、Calabiエネルギーが一定値未満の領域を連続な道で結べることを示す。この構造を用いて、滑らかな計量上のエネルギー下限を完備化におけるMabuchi汎関数の降下勾配の下限と同定する。K半安定な実豊富類ではエネルギーを任意に小さくでき、Kähler曲面のcontrolled cone内ではK多重安定性からcscK計量が得られる。さらにcscK計量を含む曲面の類では、十分小さい初期エネルギーだけで一様Sobolev評価と滑らかなCalabi flowの全時間存在を導く。
abstract_source_url: https://arxiv.org/abs/2611.14189
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.14189v1](https://arxiv.org/abs/2611.14189)
- **著者:** Haozhao Li, Bing Wang
- **初回投稿日:** 2026-11-10
- **最終更新日:** 2026-11-10
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

cscK計量を探す一つの考え方は、スカラー曲率の平均からのずれを測るCalabiエネルギーを小さくすることである。しかし、エネルギーが小さい計量の集合がどのようにつながっているか、弱い完備化で得られる情報を滑らかな計量へ戻せるかは、別の問題となる。

本論文は、任意の非空な厳密劣位集合が道連結であることを示す。この結果は、滑らかなCalabi flowの全時間存在を仮定しない。さらに滑らかな計量上のエネルギー下限を有限エネルギー空間上のMabuchi降下勾配と同定し、K半安定な実豊富類でエネルギー下限が零になることを導く。

曲面では二つの異なる応用がある。一つはcontrolled cone内のK多重安定な類におけるcscK計量の存在、もう一つは既にcscK計量を含む類での小エネルギーCalabi flowの長時間存在である。後者は初期曲率の点ごとの評価を仮定せず、エネルギーからSobolev定数を制御する点に特徴がある。

## 背景と問題設定

コンパクト連結Kähler多様体の固定類で、$\omega\_u=\omega\_\ast+i\partial\bar\partial u>0$ と書く。$V=\int\_X\omega\_\ast^n$、$d\mu\_u=V^{-1}\omega\_u^n$ とし、原論文の複素スカラー曲率 $S\_u$ とその平均 $\bar S$ に対して

$$
\operatorname{Ca}(u)=\int\_X(S\_u-\bar S)^2d\mu\_u
$$

を用いる。以下のエネルギーは平方根ではなく、この二乗積分である。ポテンシャルはAubin–Mabuchi汎関数 $\operatorname{AM}(u)=0$ で正規化する。滑らかな空間 $\mathcal H$ のMabuchi距離 $d\_2$ による完備化を $\mathcal E^2$、Mabuchi汎関数を $\mathcal M$ と書く。

## 主結果

### 厳密劣位集合の道連結性（Theorem 1.1）

任意の非空な集合

$$
U\_c^\alpha=\lbrace u\in C^{4,\alpha}:\omega\_u>0,\ \operatorname{AM}(u)=0,\ \operatorname{Ca}(u)<c\rbrace
$$

は $C^{4,\alpha}$ 位相で道連結である。端点が滑らかなら、道も滑らかなポテンシャルからなり、$C^\infty$ 位相で連続に選べる。これは一つの極小点の近傍だけの局所結果ではなく、非空な劣位集合全体についての結果である。

### 滑らかな下限と完備化の下限（Theorem 1.2・Corollary 1.3）

任意のコンパクトKähler類で

$$
\inf\_{u\in\mathcal H}\sqrt{\operatorname{Ca}(u)}
=\inf\_{u\in\mathcal E^2}|\partial\mathcal M|(u)
$$

が成り立つ。右辺は降下勾配であり、弱いポテンシャルを許しても滑らかな側の最良の下限と一致する。

滑らかな射影多様体の実豊富類 $\Omega\in\operatorname{NS}\_{\mathbb R}(X)$ がコホモロジー的にK半安定なら、

$$
\inf\_{\omega\in2\pi\Omega}\operatorname{Ca}(\omega)=0
$$

となる。整係数の類では通常の代数的K半安定性で十分である。下限が零という結論と、cscK計量が実際に存在するという結論は区別される。

### controlled coneでの存在（Theorem 1.4）

コンパクトKähler曲面で、$c\_1=c\_1(X)$ として

$$
\mathcal U=\left\lbrace \Omega\in\mathcal K\_X:c\_1\cdot\Omega>0,\quad
c\_1^2-\frac{2(c\_1\cdot\Omega)^2}{3\Omega^2}>0\right\rbrace
$$

を考える。$\Omega\in\mathcal U$ がK多重安定なら、$2\pi\Omega$ は滑らかなcscK計量を含む。したがって、ここでの存在主張には次元二と明示された錐の条件が不可欠である。

### 小エネルギーとSobolev定数（Theorem 1.5）

曲面の固定類にcscK計量 $\omega\_\ast$ が存在するとする。正規化された体積測度について

$$
C\_S(\omega\_u)=\sup\_{f\ne0}
\frac{(\int\_X|f|^4d\mu\_u)^{1/2}}
{\int\_X|\partial f|^2d\mu\_u+\int\_Xf^2d\mu\_u}
$$

と置く。任意の $A>C\_S(\omega\_\ast)$ に対し $\varepsilon\_A>0$ が存在し、同じ類の滑らかな計量で $\operatorname{Ca}(u)<\varepsilon\_A$ なら $C\_S(\omega\_u)<A$ となる。

### Calabi flowの長時間存在（Corollary 1.6）

同じ曲面の仮定の下で、初期Calabiエネルギーが十分小さければ

$$
\frac{\partial u}{\partial t}=S\_u-\bar S
$$

は全ての $t\ge0$ で滑らかに存在し、Sobolev定数を一様に抑えられる。ここで紹介する結論は長時間存在と評価であり、Introductionに述べられたこの系を収束定理へ読み替えるものではない。

## 証明の見取り図

出発点は古典的なレゾルベント方程式である。正規化したポテンシャルを結ぶアフィンな道に十分大きなパラメータのレゾルベントを作用させ、エネルギー閾値より下へ移す。端点との接続と滑らかな近似を組み合わせて道連結性を得る。

下限の同定では、この滑らかなレゾルベントを有限エネルギーの変分的競争相手と比較する。K半安定性への応用には、実豊富類におけるエントロピーの近似と、測地線方向の安定性・勾配の双対性が加わる。同種の下限の同定に関するHisamotoの独立な研究にもIntroductionは言及している。

曲面の存在問題では、controlled coneでの退化の解析を用い、K多重安定性により零Donaldson–Futaki不変量をもつ退化を積型へ制限する。一方、小エネルギーのSobolev評価には、コンパクト性と鋭いEuclid型Sobolev不等式を利用し、道連結性を通じて基準計量の評価を伝える。Calabi flowに沿うエネルギー減少がこの制御を保つ。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.14189)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.14189v1) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.4, 1.5; Corollaries 1.3, 1.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.14189v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
