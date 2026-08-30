---
layout: paper
title: "Weak Kähler hyperbolicity is birational"
title_ja: "弱Kähler双曲性は双有理不変である"
authors: "Francesco Bei, Benoît Claudon, Simone Diverio, Stefano Trapani"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  We show that a compact Kähler manifold bimeromorphic to a weakly Kähler hyperbolic manifold is weakly Kähler hyperbolic, providing an answer to a problem raised by J. Kollár in his 1995 book "Shafarevic maps and automorphic forms"
topic: algebraic-geometry
tags:
  - birational-geometry
  - hyperbolicity
  - positivity
arxiv_id: "2406.01734v2"
arxiv_url: "https://arxiv.org/abs/2406.01734"
arxiv_submitted: "2024-06-03"
arxiv_updated: "2024-10-08"
summary: >-
  bigかつnefで普遍被覆上に有界な原始をもつ代表を許す類の存在として定義される弱Kähler双曲性が、コンパクトKähler多様体の双有理不変量であることを証明する。これによりKollárが提起した双有理版Kähler双曲性の問題に答える。
abstract_en: >-
  We show that a compact Kähler manifold bimeromorphic to a weakly Kähler hyperbolic manifold is weakly Kähler hyperbolic, providing an answer to a problem raised by J. Kollár in his 1995 book "Shafarevic maps and automorphic forms"
summary_en: ""
abstract_ja: >-
  弱Kähler双曲的なコンパクトKähler多様体と双有理同値な任意のコンパクトKähler多様体も弱Kähler双曲的であることを示す。これはKollárが1995年の著書で提起した問題への回答である。
abstract_source_url: "https://arxiv.org/abs/2406.01734"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2406.01734](https://arxiv.org/abs/2406.01734)
- **著者:** Francesco Bei, Benoît Claudon, Simone Diverio, Stefano Trapani
- **初回投稿日:** 2024年6月3日
- **最終更新日:** 2024年10月8日
- **主分類・副分類:** math.AG, math.CV
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

GromovのKähler双曲性はKähler形式が普遍被覆上で有界な原始をもつことを要求するため、双有理モデルの変更に自然には振る舞わない。弱Kähler双曲性はKähler形式をbigかつnefな退化しうる類へ置き換え、この欠点を補う候補として導入された。

既知の結果では弱Kähler双曲性は修正に沿って引き戻せた。本論文は逆向き、すなわち修正 $\mu:Z\to X$ に対して $Z$ の弱Kähler双曲性が $X$ に降りることを証明する。

したがって弱Kähler双曲性はコンパクトKähler多様体の双有理不変量になる。さらに生成有限な支配的有理型写像に対する保存則と、退化集合の写像による振る舞いも導かれる。

## 背景と問題設定

$X$ 上の実 $(1,1)$-類で、bigかつnefであり、滑らかな代表が普遍被覆上で $d$-完全かつ有界な原始をもつものの錐を $W_X$ とする。定義は

$$
X\text{ が弱Kähler双曲的}\quad\Longleftrightarrow\quad W_X\ne\varnothing
$$

である。課題は、修正の押し出しが一般にはnef性を保たないにもかかわらず、この錐の非空性を降下させることである。

## 主結果

### 主定理

$\mu:Z\to X$ をコンパクトKähler多様体間の修正とする。$Z$ が弱Kähler双曲的ならば $X$ も弱Kähler双曲的である。より具体的には $\alpha\in W_Z$ に対して $\mu_*\alpha\in W_X$ が成り立つ。

### 双有理不変性（Corollary 1.2）

双有理同値なコンパクトKähler多様体 $X,Y$ について、$X$ が弱Kähler双曲的であることと $Y$ が弱Kähler双曲的であることは同値である。

### 生成有限写像（Corollaries 1.3–1.4）

生成有限な支配的有理型写像 $f:X\dashrightarrow Y$ では、$Y$ の弱Kähler双曲性は $X$ へ移る。逆向きには基本群上の写像の単射性を仮定する。正則写像で両側が弱Kähler双曲的なら、その退化集合は

$$
Z_X=f^{-1}(Z_Y)\cup\operatorname{Exc}(f)
$$

を満たす。

## 証明の見取り図

鍵は、普遍被覆上で有界な原始をもつ2次コホモロジー類が基本群の分類空間から来るという位相的記述である。Brunnbauer–Kotschick–Schönlinnerの結果を使ってこの双曲的類を基本群を通じて移し、$Z$ 上の類が $X$ 上の双曲的類の引き戻しであることを示す。複素幾何側ではbig・nef類の引き戻しと押し出しを組み合わせ、押し出した類が $W_X$ に入ることを得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2406.01734](https://arxiv.org/abs/2406.01734)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Main Theorem, Corollaries 1.2–1.4
- **論文構成の説明:** Introduction末尾および各結果後の説明, pp. 2–3
- **確認したarXivバージョン:** v2
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
