---
layout: paper
title: Bridgeland Stability of Sheaves on del Pezzo Surface of Picard Rank Three
title_ja: Picard数3のdel Pezzo曲面で直線束の不安定性を検出する
authors: Yuki Mizuno, Tomoki Yoshida
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study the stability of line bundles and torsion sheaves under divisorial Bridgeland stability conditions. On the blow-up of $\mathbb{P}^2$ at two general points, we characterize stability and semistability of a line bundle, or of its shift in the tilted heart, in terms of the three $(-1)$-curves. We also prove that, on any smooth projective surface, the pushforward of a torsion-free sheaf of rank $1$ on an integral curve of nonpositive self-intersection is stable for every divisorial stability condition.
topic: algebraic-geometry
tags:
- stability
- vector-bundles-sheaves
- fano-varieties
arxiv_id: 2502.18894v3
arxiv_url: https://arxiv.org/abs/2502.18894
arxiv_submitted: '2025-02-26'
arxiv_updated: '2026-11-21'
summary: Picard数3のdel Pezzo曲面では、三本の例外曲線に付随する部分対象を調べると直線束の因子的Bridgeland安定性が判定できる。さらに任意の滑らかな複素射影曲面で、自己交点が非正の整曲線上の階数1の捩れのない層の押し出しは安定である。
abstract_en: ''
summary_en: On a plane blown up at two distinct points, three exceptional curves supply a finite test for stability throughout the divisorial family. The test applies on either side of the shift that places a line bundle in the tilted heart. An example explains why detecting a wall does not identify the subobject of largest slope.
abstract_ja: 安定条件を動かすと、直線束も傾けた心の中で安定性を失いうる。本論文は三本の負曲線のいずれかがその変化を検出することと、最大傾斜の部分対象を与えることとの違いを明らかにする。
abstract_source_url: https://arxiv.org/abs/2502.18894
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2502.18894v3](https://arxiv.org/abs/2502.18894)
- **著者:** Yuki Mizuno, Tomoki Yoshida
- **初回投稿日:** 2025-02-26
- **最終更新日:** 2026-11-21
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

直線束は古典的な層の傾斜安定性については安定だが、導来圏の安定条件を動かすとこの性質は失われうる。問題は心の中の無数の部分対象のうち、どれを調べれば不安定性を見つけられるかである。

射影平面を二点で吹き上げた曲面には、例外曲線二本と二点を結ぶ直線の固有変換がある。著者らはこの三本で安定性と半安定性の両方を判定する。

この判定には限界もある。三本が与える部分対象より傾斜の大きい別の部分対象が現れる例があり、判定を最大傾斜の計算に置き換えることはできない。

## 背景と問題設定

因子的安定条件は実因子類と豊富類から定まる。大体積極限から離れると、負の自己交点を持つ曲線が安定性の壁に関与する。

## 主結果

### 三本の曲線による判定（Theorem B）

$E\_i$ を三本の $(-1)$ 曲線、$\beta\_\sigma$ を安定条件の傾斜とする。直線束 $L$ が心に属するとき、不安定または厳密半安定となる必要十分条件は、ある $i$ で自然な射 $L(-E\_i)\to L$ が心の部分対象を与え、次を満たすことである。

$$
\beta\_\sigma(L(-E\_i))\geq\beta\_\sigma(L).
$$

$L[1]$ が心に属する場合は $L(E\_i)|\_{E\_i}\to L[1]$ について同じ判定を用いる。どちらも不等号を厳密にすると、半安定性を失うための必要十分条件となる。

### 曲線に台を持つ層（Proposition C）

滑らかな複素射影曲面への整曲線の包含 $\iota:C\hookrightarrow Y$ で $C^2\leq0$ とする。$C$ 上の階数1の捩れのない層 $F$ に対し、$\iota\_\ast F$ はすべての因子的安定条件で安定である。

## 証明の見取り図

直線束のテンソル積で構造層の場合に帰着する。階数1の部分対象はHodge指数定理によって三本の負曲線と比較できる。より高い階数ではBertramの補題による局所的な階数低下を用い、負曲線に台を持つ層の安定性で壁上の比較を閉じる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2502.18894)
- **Introduction:** [PDF](https://arxiv.org/pdf/2502.18894v3) — 序論 §§0.1–0.2 と論文構成（pp. 1–4）
- **Introduction中で言及された主要結果:** Theorem B, Proposition C
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2502.18894v3
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
