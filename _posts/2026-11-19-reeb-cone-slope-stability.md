---
layout: paper
title: On the slope stability of vector bundles on Sasakian manifolds
title_ja: Reebベクトルを動かしたときの横断的正則ベクトル束の安定性
authors: Yohei Hada
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study the variation problem of slope stability of $T$-linearized sheaves on a compact Sasakian manifold, or more generally, on an affine variety with a good $T$-action. In particular, we establish the wall-and-chamber structure for the slope stability of $T$-linearized torsion-free sheaves.
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- stability
arxiv_id: 2611.24183v1
arxiv_url: https://arxiv.org/abs/2611.24183
arxiv_submitted: '2026-11-18'
arxiv_updated: '2026-11-18'
summary: コンパクト佐々木多様体の横断的正則ベクトル束について、Reebベクトルを動かしても安定性は開条件となる。対応する次数付き加群を用いると、Harder–Narasimhanフィルトレーションの変化は有限個の部屋に整理できる。
abstract_en: ''
summary_en: A transverse bundle has a different slope for each choice of Reeb direction. Passing to a single module with torus weights makes these slopes comparable across the cone. The resulting chamber decomposition records the actual destabilizing filtrations.
abstract_ja: Reeb流の閉包であるトーラスの作用を持つ束を考える。各方向での微分幾何的スロープは、錐の座標環上の加群のスロープから復元できる。この対応により、半安定性の判定に必要な部分加群を有限個に絞れる。
abstract_source_url: https://arxiv.org/abs/2611.24183
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.24183v1](https://arxiv.org/abs/2611.24183)
- **著者:** Yohei Hada
- **初回投稿日:** 2026-11-18
- **最終更新日:** 2026-11-18
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

佐々木多様体では、Reeb流に横断的な方向に複素幾何がある。Reebベクトルを動かすと、同じトーラスの作用から得た束でも、部分束の次数と安定性が変わり得る。

著者は、複素錐上の一つの加群にすべての方向の情報を記録する。方向を指定して指標の次数を実数値に読み替えると、その方向の横断スロープを代数的に計算できる。

個々の方向の判定にとどまらず、錐全体を通じて生じる不安定化の仕方が有限個に限られることを示す。

## 背景と問題設定

スロープ安定性は、低い階数の部分層の傾きが束全体の傾きより小さいことを要求する。Reeb軌道が閉じない場合にも適用するため、著者は軌道空間に降ろす操作に代えて、流の閉包 $T$ とその複素化の指標を用いる。

## 主結果

### 横断スロープと加群のスロープ（Theorem A）

実次元 $2n+1$、$n\ge1$ のコンパクト佐々木多様体上で、$T$ 線形化を持つ横断的正則束に対応する次数付き加群を $M$ とする。すべてのReebベクトル $\tau$ に対し

$$
\mu\_{\mathrm{Sas}}(E\_\tau)=\frac{1}{2\pi}\mu\_{\mathrm{gr}}(M\_\tau)
$$

が成立し、安定性も半安定性も両側で同値となる。

### 安定領域の開性（Theorem B）

束がある方向で安定なら、その方向の十分小さな近傍でも安定である。無限に多くの部分層があるため、個々のスロープの連続性だけではこの結論は出ない。

### 有限個の部屋（Theorem C）

良い複素トーラス作用を持つ正規アフィン多様体の座標環上で、指標付きの捩れのない加群を固定する。有限個の飽和次数付き部分加群 $N\_i$ が存在して、半安定領域はすべての $i$ について $\mu(N\_{i,\tau})\le\mu(M\_\tau)$ となる方向の集合に一致する。Reeb錐には標準的な有限分割があり、各部屋ではHarder–Narasimhanフィルトレーションが一定で、異なる部屋では異なる。

## 証明の見取り図

開性の解析的証明では、横断Kobayashi–Hitchin対応によるスロープ差の一様評価と、指標から得る微分評価を組み合わせる。有限性の証明では部分加群の行列式を比較し、余次元一の重複度を非負整数ベクトルで表す。Dicksonの補題で極大スロープの候補を絞り、商加群で同じ議論を繰り返す。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.24183)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.24183v1) — §1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems A, B, C
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.24183v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
