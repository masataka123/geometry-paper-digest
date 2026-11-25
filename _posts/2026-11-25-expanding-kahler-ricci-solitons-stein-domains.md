---
layout: paper
title: Nontrivial Expanding Kähler--Ricci Solitons and Automorphism Groups of Stein Domains
title_ja: Stein領域の自己同型群と非自明な膨張Kähler–Ricciソリトン
authors: Soumya Ganguly
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: We study complete nontrivial expanding Kähler--Ricci solitons with complete real holomorphic soliton fields. Let $Ω$ be a relatively compact domain in a complex surface such that a neighborhood of $\overlineΩ$ admits a holomorphic immersion into Euclidean space. We prove that such a soliton exists if and only if $Ω$ is Stein and the identity component of $\operatorname{Aut}(Ω)$ is noncompact. On such a Stein domain, a complete real holomorphic vector field is the soliton field of a complete nontrivial expander if and only if its flow has noncompact closure in $\operatorname{Aut}(Ω)$. In higher dimensions, we establish existence criteria using the adjoint representation of automorphism groups, boundary geometry, and homogeneous positive closed $(1,1)$-currents. We give sufficient conditions for the holomorphic $\mathbb{C}^{n-1}$-action on the universal globalization of a proper holomorphic $\mathbb{R}^{n-1}$-action on a Stein $n$-manifold to be free and proper. Applications
  include bounded convex and homogeneous domains, domains satisfying weak Kobayashi visibility, and certain finite-type domains.
topic: several-complex-variables
tags:
- stein-geometry
- kahler-ricci-flow-solitons
- noncompact-kahler-geometry
arxiv_id: 2611.31020v1
arxiv_url: https://arxiv.org/abs/2611.31020
arxiv_submitted: '2026-11-23'
arxiv_updated: '2026-11-23'
summary: 複素二次元のStein領域では、閉包近傍の正則はめ込みを仮定すると、完備な非自明膨張ソリトンの存在を自己同型群の非コンパクト性で判定できる。高次元では境界の幾何や自己同型群の構造が十分条件を与える。
abstract_en: ''
summary_en: A nonzero vector field can generate isometries of a Kähler–Einstein metric, so it need not give a genuinely expanding geometry. Ganguly tests a prescribed flow by looking for positive currents scaled by that flow. In dimension two the resulting existence test for bounded domains combines pseudoconvexity with a condition on the automorphism group.
abstract_ja: 実正則フローで指数的に拡大する正の閉カレントを構成し、それを非自明な完備ソリトンの存在につなげる。指定したベクトル場とその逆向きの場の両方を実現できる領域も同定する。
abstract_source_url: https://arxiv.org/abs/2611.31020
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.31020v1](https://arxiv.org/abs/2611.31020)
- **著者:** Soumya Ganguly
- **初回投稿日:** 2026-11-23
- **最終更新日:** 2026-11-23
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

膨張ソリトンでは計量とベクトル場の両方を求める。場が非零でも計量の等長変換を生成するだけなら、自明な解のままである。

著者は、指定した実正則フローの下で一定の指標に従って伸びる正の閉カレントを探す。これが見つかると、所定のStein領域上にその場をもつ非自明ソリトンを得る。

特に複素二次元の有界領域では、擬凸で自己同型群の単位成分が非コンパクトであることが必要十分である。高次元の任意の領域への同じ主張は予想として残る。

## 背景と問題設定

$K>0$ に対する方程式は $\mathrm{Ric}(\omega)+K\omega=\mathcal L\_Y\omega$ であり、計量と場をともに完備とする。流れを $\Phi\_t$ と書くとき、$\Phi\_t^\ast T=e^{Kt}T$ を満たす非零の正閉 $(1,1)$ カレントが構成の入力である。以下の相対コンパクトな領域については、閉包の近傍から複素Euclid空間への正則はめ込みを仮定する。

## 主結果

### 自己同型群からの構成（Theorem 1.2、Corollaries 1.3–1.4）

有界正則関数が接方向を分離し、非コンパクトな自己同型群の単位成分 $G$ が固有に作用するとする。固有なフローの生成元の随伴作用に実部が正または負の固有値があれば、対応する時間方向に斉次カレントが得られる。例外的な群の形は $\mathbb R^p\times C$（$C$ はコンパクト連結群）である。相対コンパクトなStein領域で $G$ が非コンパクトなら、$1\le p\le n-2$ のこの形を除いて非自明ソリトンが存在する。次元二ではフローの閉包が非コンパクトな各場 $Y$ について、$Y$ と $-Y$ の双方がすべての $K>0$ で実現される。

### 後退フローに沿う減衰（Theorem 1.5）

Stein領域で、恒等的に零でない有界非負の多重劣調和関数 $u$ が $t\to-\infty$ で $u\circ\Phi\_t\to0$ を局所一様に満たせば、各 $K>0$ に対し生成元 $Y$ をもつ非自明ソリトンが存在する。

### 境界条件からの判定（Theorem 1.6）

境界に非定数解析円板がないか、境界に関する論文の $(1,\kappa\_0)$ 可視性条件が成り立てば、固有なフローに両方向の非零の滑らかな斉次形式がある。完備な非自明ソリトンの存在は、この場合Stein性と $G$ の非コンパクト性の組に同値である。

### 同変写像による移送（Theorem 1.8）

固有な実正則フロー $\Psi$ をもつ多様体 $M$ への同変正則写像があり、離散商 $M/\langle\Psi\_1\rangle$ がSteinなら、もとの領域に階数一の正閉形式 $T\_\pm$ が存在して $\Phi\_t^\ast T\_\pm=e^{\pm Kt}T\_\pm$ を満たす。

### 有界凸領域と等質領域（Theorem 1.9）

これらの領域に双正則な多様体では、すべての固有な実正則フローで両方向のソリトンを構成できる。複素次元二以上なら、完備な場をもつ非自明解が存在することと $G$ が非コンパクトであることは同値である。

## 証明の見取り図

ソリトンの自己相似な流れを時刻零へ戻したときに現れるカレントの変換則から出発する。逆方向には既知の存在定理を使い、同じ変換則を満たすカレントを構成すればよい。随伴表現のスペクトル、後退フローに沿った関数の減衰、時間一写像による商という異なる条件が、この共通の構成問題に結び付く。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.31020)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.31020v1) — §1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.2, 1.5, 1.6, 1.8, 1.9、Corollaries 1.3–1.4, 1.7, 1.10。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.31020v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
