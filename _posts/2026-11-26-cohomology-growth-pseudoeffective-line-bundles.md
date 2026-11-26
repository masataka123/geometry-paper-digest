---
layout: paper
title: Cohomology growth for pseudoeffective line bundles on compact Kähler manifolds
title_ja: 擬有効直線束の高次コホモロジーの増大度
authors: Hongrong Chen, Guokuan Shao, Wenxuan Wang, Xiangyu Zhou
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: Let $L$ be a pseudoeffective line bundle with a singular metric $h$ satisfying $Θ_h(L)\geq0$ on a compact Kähler manifold $X$ of dimension $n$. Let $\mathcal{I}(h^k)$ denote the multiplier ideal sheaf of $h^k$. For every holomorphic vector bundle $E$ and $0\le q\le n$, we prove that $$\mathrm{dim}_{\mathbb{C}}H^q\!\left(X,E\otimes L^k\otimes\mathcal{I}(h^k)\right)=O(k^{n-q}),$$ which gives an affirmative answer to Matsumura's growth problem. As an application, we resolve the cohomology growth problem for nef line bundles raised by Demailly.
topic: several-complex-variables
tags:
- positivity
- multiplier-ideals-extension
- l2-methods
arxiv_id: 2611.33601v1
arxiv_url: https://arxiv.org/abs/2611.33601
arxiv_submitted: '2026-11-25'
arxiv_updated: '2026-11-25'
summary: コンパクトKähler多様体上で、半正の特異計量から定まる乗数イデアルを係数に含めた高次コホモロジーの次元を評価する。任意の特異性を許す場合の松村の問題と、nef直線束についてのDemaillyの問題に肯定的な答えを与える。
abstract_en: Let $L$ be a pseudoeffective line bundle with a singular metric $h$ satisfying $Θ_h(L)\geq0$ on a compact Kähler manifold $X$ of dimension $n$. Let $\mathcal{I}(h^k)$ denote the multiplier ideal sheaf of $h^k$. For every holomorphic vector bundle $E$ and $0\le q\le n$, we prove that $$\mathrm{dim}_{\mathbb{C}}H^q\!\left(X,E\otimes L^k\otimes\mathcal{I}(h^k)\right)=O(k^{n-q}),$$ which gives an affirmative answer to Matsumura's growth problem. As an application, we resolve the cohomology growth problem for nef line bundles raised by Demailly.
summary_en: ''
abstract_ja: 曲率カレントが非負であれば、直線束のテンソル冪の次数に関する増大指数は、多様体の次元からコホモロジー次数を引いた値以下になる。特異計量については局所質量評価とスペクトル射影の階数を組み合わせてこの指数を得る。
abstract_source_url: https://arxiv.org/abs/2611.33601
license_name: CC0 1.0 Universal
license_url: http://creativecommons.org/publicdomain/zero/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.33601v1](https://arxiv.org/abs/2611.33601)
- **著者:** Hongrong Chen, Guokuan Shao, Wenxuan Wang, Xiangyu Zhou
- **初回投稿日:** 2026-11-25
- **最終更新日:** 2026-11-25
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)

## 要約

正の直線束では高いテンソル冪を取ると高次コホモロジーが消える。一方、曲率カレントの半正性だけを仮定する場合には、その次元がどれだけ速く増え得るかが問題になる。

特異計量の冪に対する可積分性は、冪ごとに変化する乗数イデアルで表される。著者らはその特異性が代数的であるとの仮定を外して増大度を評価する。

別の帰結では、nef直線束の滑らかな近似計量を一様に扱うことで、乗数イデアルを伴わない通常のコホモロジーにも同じ指数を得る。

## 背景と問題設定

$X$ を複素次元 $n$ のコンパクトKähler多様体、$E$ を固定した正則ベクトル束とする。滑らかな計量のもとで使える、スケール変換したラプラシアンの一様な点ごとの評価は、特異な重みの曲率下界のみからは得られない。

## 主結果

### 特異計量と乗数イデアル（Theorem 1.1）

正則直線束 $L$ の特異Hermite計量 $h$ が $\Theta\_h(L)\ge0$ を満たすとき、各 $0\le q\le n$ で
$$
\dim\_{\mathbb C}H^q(X,E\otimes L^k\otimes\mathcal I(h^k))=O(k^{n-q}).
$$
右辺の指数は高いコホモロジー次数ほど小さく、最高次数では次元が一様有界になる。

### nef直線束の場合（Corollary 1.2）

$L$ がnefなら $\dim\_{\mathbb C}H^q(X,E\otimes L^k)=O(k^{n-q})$ が成り立つ。こちらの結論は特定の特異計量を選ぶことを要しない。

## 証明の見取り図

重み付き調和形式に半径 $r$ の球上で $r^{2q}$ の局所質量評価を得る。局所Gaussian切断と階数 $O(k^n)$ のスペクトル射影を用いて次元をその積で抑え、$r=k^{-1/2}$ を選ぶと $k^{n-q}$ が現れる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.33601)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.33601v1) — §1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.1、Corollary 1.2。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.33601v1
- **確認したライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)
- **source\_scope:** Abstract and Introduction
