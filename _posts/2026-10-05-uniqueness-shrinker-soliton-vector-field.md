---
layout: paper
title: Uniqueness of the soliton vector field of a shrinking gradient Kähler-Ricci soliton
title_ja: 縮小Kähler–Ricciソリトンのベクトル場の一意性
authors: Ronan J. Conlon, Alix Deruelle
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: |-
  We establish the uniqueness of the soliton vector field of a complete shrinking gradient Kähler-Ricci soliton up to pushforward by biholomorphism.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- noncompact-kahler-geometry
arxiv_id: 2610.02164v1
arxiv_url: https://arxiv.org/abs/2610.02164
arxiv_submitted: '2026-10-01'
arxiv_updated: '2026-10-01'
summary: |-
  固定した非コンパクト複素多様体上で、完備な勾配縮小Kähler–Ricciソリトンを与える実正則ベクトル場が、双正則写像による移送を除いて高々一つであることを示す。零点集合のコンパクト性を使い、従来必要だったRicci曲率の有界性を外す。
abstract_en: ''
summary_en: |-
  The question is whether one complex manifold can support inequivalent vector fields that generate complete shrinking Kähler–Ricci solitons. The authors prove uniqueness modulo holomorphic automorphisms without a curvature bound. Compactness of the zero set makes an earlier weighted analytic argument applicable in this wider setting. The theorem concerns the vector field; it should be distinguished from a general uniqueness statement for the metric.
abstract_ja: |-
  完備な勾配縮小Kähler–Ricciソリトンのベクトル場について、双正則写像による押し出しを除く一意性を証明する。非コンパクトの場合にも曲率の有界性やトーリック性を仮定しない。Introductionは、松島型定理、重み付き体積汎関数の最小化、極大トーラスの共役性を証明の三つの柱として説明する。
abstract_source_url: https://arxiv.org/abs/2610.02164
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.02164v1](https://arxiv.org/abs/2610.02164)
- **著者:** Ronan J. Conlon, Alix Deruelle
- **初回投稿日:** 2026-10-01
- **最終更新日:** 2026-10-01
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Ricciソリトンは、計量の変化が微分同相と拡大縮小で記述されるRicci流の特別な解である。そのうち縮小ソリトンは有限時間特異点のモデルとなるため、複素構造を固定したときの一意性を理解することに意味がある。

本論文は、非コンパクト複素多様体上で完備な勾配縮小Kähler–Ricciソリトンを与える実正則ベクトル場が、双正則写像を除いて一意であることを示す。存在を主張する定理ではなく、存在する場合に許されるベクトル場を比較する結果である。

従来はRicci曲率の有界性やトーラスに関する制約の下で一意性が知られていた。著者らは、ソリトン場の零点集合がコンパクトであるという既知の構造結果を利用し、曲率条件を撤廃する。計量そのものの一意性とは区別して読む必要がある。

## 背景と問題設定

完備計量 $g$ とベクトル場 $X$ に対するRicciソリトン方程式は

<div>
$$
\operatorname{Ric}(g)+\frac12\mathcal L_Xg=\lambda g
$$
</div>

である。$X=\nabla_gf$ のときは勾配型であり、縮小型では $\lambda>0$ を $\lambda=1$ と規格化する。$g$ がKählerで $X$ が実正則なら、Kähler形式 $\omega$ によって

<div>
$$
\rho_\omega+i\partial\bar\partial f=\omega
$$
</div>

と書ける。この論文では勾配場 $X$ をソリトンベクトル場と呼ぶ。

Introductionによると、コンパクトな場合はTian–Zhu、非コンパクトでRicci曲率が有界な場合はConlon–Deruelle–SunとEsparzaの仕事が先行する。トーリックな場合には曲率条件なしの結果も知られていた。

## 主結果

### 主定理：ソリトン場の一意性（Theorem A）

非コンパクト複素多様体 $M$ 上で、滑らかな実関数 $f$ に対して $X=\nabla_gf$ となる完備な縮小Kähler–Ricciソリトン $(M,g,X)$ を許す実正則ベクトル場は、双正則写像による押し出しを除いて高々一つである。

二つのそのような場 $X_0,X_1$ があれば、ある双正則写像 $\Phi:M\to M$ により $\Phi_*X_0=X_1$ と同一視できる、という意味である。曲率の有界性、共通のトーラスへの所属、トーリック性を主定理の仮定に加える必要はない。一方で、Introductionに掲げられたTheorem Aは、この $\Phi$ が二つの計量まで一致させるという主張ではない。

## 証明の見取り図

第一に、零点集合のコンパクト性から、ソリトン場と可換なベクトル場の重み付き $L^2$ 評価を得る。これにより従来の有界Ricci曲率の場合の議論を拡張し、松島型定理を得る。

第二に、ポテンシャルの固有性を使い、$JX$ を重み付き体積汎関数の最小点として特徴付ける。第三に、偏極Fanoファイブレーションの自己同型群において、Reeb場を含む極大トーラスに関するIwasawa型定理を適用する。この三つを組み合わせて異なるソリトン場を比較するのが、Introductionの説明する論理の流れである。

## 原論文との対応

- **Abstractページ:** [公式Abstract](https://arxiv.org/abs/2610.02164)。`arxiv_abstract`は公式arXiv APIの原文全文を保存した。
- **Introduction:** [確認版PDF](https://arxiv.org/pdf/2610.02164v1)、Section 1, pp. 1–2。
- **Introduction中で言及された主要結果:** Theorem A。証明の柱としてTheorem 3.1、Lemma 3.5をIntroductionが参照する。
- **論文構成の説明:** §1.2, p. 2の三段階の証明説明。
- **確認したarXivバージョン:** 2610.02164v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction。後続節の証明の検証は行っていない。
