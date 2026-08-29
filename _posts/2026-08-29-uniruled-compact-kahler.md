---
layout: paper
title: "A characterization of uniruled compact Kähler manifolds"
title_ja: "単線織コンパクトKähler多様体の特徴づけ"
authors: "Wenhao Ou"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  We adapt Bost's algebraicity characterization to the situation of a germ in a compact Kähler manifold. As a consequence, we extend the algebraic integrability criteria of Campana-Păun and of Druel to foliations on compact Kähler manifolds. As an application, we prove that a compact Kähler manifold is uniruled if and only if its canonical line bundle is not pseudoeffective.
topic: algebraic-geometry
tags:
  - foliations
  - positivity
  - pluripotential-theory
arxiv_id: "2501.18088v1"
arxiv_url: "https://arxiv.org/abs/2501.18088"
arxiv_submitted: "2025-01-30"
arxiv_updated: "2025-01-30"
summary: >-
  射影多様体で知られていた単線織性と標準束の非擬有効性の同値を、任意次元のコンパクトKähler多様体へ拡張する。Bost型代数性判定を準psh関数とLelong数で解析化し、葉層の代数的可積分性を経由して特徴づけを導く。
abstract_en: >-
  We adapt Bost's algebraicity characterization to the situation of a germ in a compact Kähler manifold. As a consequence, we extend the algebraic integrability criteria of Campana-Păun and of Druel to foliations on compact Kähler manifolds. As an application, we prove that a compact Kähler manifold is uniruled if and only if its canonical line bundle is not pseudoeffective.
summary_en: ""
abstract_ja: >-
  Bostの代数性特徴づけをコンパクトKähler多様体内の芽へ適応する。その帰結としてCampana–PăunおよびDruelの葉層の代数的可積分性判定をコンパクトKähler多様体へ拡張する。応用として、コンパクトKähler多様体が単線織であることと標準線束が擬有効でないことの同値を示す。
abstract_source_url: "https://arxiv.org/abs/2501.18088"
license_name: "Creative Commons CC0 1.0 Universal"
license_url: "http://creativecommons.org/publicdomain/zero/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2501.18088v1](https://arxiv.org/abs/2501.18088)
- **著者:** Wenhao Ou
- **初回投稿日:** 2025年1月30日
- **最終更新日:** 2025年1月30日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [CC0 1.0](http://creativecommons.org/publicdomain/zero/1.0/)

## 要約

射影多様体では、標準束が擬有効でないことと単線織性が同値である。コンパクトKähler多様体では豊富線束に依存する代数的手法をそのまま使えず、この特徴づけの高次元版が残されていた。

本論文はBostの芽の代数性判定を、準多重劣調和関数とLelong数による解析的な形へ置き換える。そこから葉層の余接層が非擬有効なら葉層が有理型写像から誘導されるという可積分性判定を得る。

この判定を標準束が非擬有効な場合に適用し、コンパクトKähler多様体が単線織であることと$K_X$が非擬有効であることの同値を全次元で確立する。

## 背景と問題設定

単線織多様体は有理曲線族で覆われる。Miyaoka–MoriとBDPPにより射影的場合の特徴づけは知られていたが、Kählerの場合には代数的切断の代わりとなる道具が必要である。著者は切断の消滅次数を準psh関数のLelong数に読み替え、局所的な葉を大域的解析集合へ延長できるかという問題へ還元する。

## 主結果

### 単線織性の特徴づけ（Theorem 1.1）

$X$をコンパクトKähler多様体とする。このとき

$$
X\text{ が単線織}\quad\Longleftrightarrow\quad K_X\text{ が擬有効でない}
$$

が成り立つ。射影性を仮定せず任意次元で成立する点が主たる新規性である。

### Kähler版Bost判定の解析的入力（Theorem 1.2, Theorem 1.3）

Introductionでは概略として次のように述べられている。適切な形式的延長性と余法束の非擬有効性をもつ局所閉部分多様体$S_0$は、そのZariski閉包と同じ次元をもつ。鍵となるTheorem 1.2は、任意の$\lambda>0$に対し、$C$に沿う制限Lelong数が$\lambda$を超える解析的特異点つき$\omega$-psh関数を構成する。

### 葉層の代数的可積分性（Theorem 1.4）

$X$上の葉層$\mathcal F$について、$\mathcal F^*$が非擬有効なら$\mathcal F$は有理型写像から誘導される。特に可動類$\alpha$に対して

$$
\mu_{\alpha,\min}(\mathcal F)>0
$$

なら同じ結論が成り立つ。これがTheorem 1.1へ至る主要な橋渡しである。

## 証明の見取り図

まずDemaillyのmass concentrationで制限Lelong数が任意に大きい準psh関数を作り、正則化により解析的特異点をもつ関数へ整える。これをBostの消滅次数の代用品として用い、余法束の非擬有効性から局所葉のZariski閉包の次元が増えないことを示す。葉層を有理型写像から誘導されるものとした後、標準束の非擬有効性から得られる正の傾きをもつ葉層に適用し、一般葉上の有理曲線を通じて単線織性を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2501.18088](https://arxiv.org/abs/2501.18088)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Theorem 1.2, Theorem 1.3, Theorem 1.4, Theorem 1.5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** Creative Commons CC0 1.0 Universal
- **source_scope:** Abstract and Introduction
