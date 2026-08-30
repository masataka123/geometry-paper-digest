---
layout: paper
title: "An abundance-type result for the tangent bundles of smooth Fano varieties"
title_ja: "滑らかなFano多様体の接束に対する豊富性型結果"
authors: "Juanyong Wang"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  In this paper we prove the following abundance-type result: for any smooth Fano variety $X$, the tangent bundle $T_X$ is nef if and only if it is big and semiample in the sense that the tautological line bundle $\mathscr{O}_{\mathbb{P}T_X}(1)$ is so, by which we establish a weak form of the Campana-Peternell conjecture (Camapan-Peternell, 1991).
topic: algebraic-geometry
tags:
  - positivity
  - fano-varieties
  - vector-bundles-sheaves
  - minimal-model-program
arxiv_id: "2408.03799v2"
arxiv_url: "https://arxiv.org/abs/2408.03799"
arxiv_submitted: "2024-08-07"
arxiv_updated: "2025-12-03"
summary: >-
  滑らかなFano多様体の接束について、nef性からbigかつsemiampleであることを導く豊富性型主張を扱う。ただしv2は証明のgapによって主定理の証明が無効であると明記しており、以下は撤回告知を含むIntroductionの主張と構想の記録であって、確立済み定理の紹介ではない。
abstract_en: ""
summary_en: >-
  The manuscript proposes an abundance statement for tangent bundles of smooth Fano varieties with nef tangent bundle. It aims to prove that the associated tautological line bundle is big and semiample, giving a weak form of the Campana--Peternell conjecture. Version 2, however, announces a gap in a lemma that invalidates the proof of the main theorem. The claimed theorem should therefore not be treated as established in this version.
abstract_ja: >-
  滑らかなFano多様体 $X$ に対し、接束 $T_X$ がnefであることと、$\mathscr{O}_{\mathbb{P}T_X}(1)$ の意味でbigかつsemiampleであることの同値を主張する。これによりCampana–Peternell予想の弱い形を目指すが、v2の重要告知はLemma 4.3の証明のgapが主定理の証明を無効にすると述べている。
abstract_source_url: "https://arxiv.org/abs/2408.03799"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2408.03799v2](https://arxiv.org/abs/2408.03799)
- **著者:** Juanyong Wang
- **初回投稿日:** 2024年8月7日
- **最終更新日:** 2025年12月3日
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Campana–Peternell予想は、nefな接束をもつ滑らかなFano多様体が有理斉次多様体であると予想する。有理斉次性なら接束は大域生成されるため、弱い正値性であるnef性からsemiample性へ進むことは、この予想への豊富性型の接近となる。

論文はCampana–Peternell多様体 $X$ に対し、$T_X$ がbigかつsemiampleであると主張する。より具体的には、射影化上のトートロジカル線束 $\mathscr O_{\mathbb P T_X}(1)$ のbig性とsemiample性が中心である。

しかし確認したv2の第1頁には、Lemma 4.3のStep 2にgapが見つかり、主定理の証明が無効になったとの重要告知がある。したがって本記事は主張と予定された証明戦略を整理するが、主結果を証明済みの事実として扱わない。

## 背景と問題設定

Demailly–Peternell–Schneiderの結果により、nefな接束をもつコンパクトKähler多様体の研究は、有限エタール被覆後のAlbanese写像のファイバーとして現れる、nefな接束をもつ滑らかなFano多様体へ還元される。低次元や特別な場合にはCampana–Peternell予想が知られる一方、高次元の一般形は未解決である。

## 主結果として掲げられた主張

### Theorem A（v2では証明無効の告知あり）

Introductionは、Campana–Peternell多様体 $X$ に対して $\mathscr O_{\mathbb P T_X}(1)$ がbigかつsemiampleであると掲げる。semiample性はbig性とbase point free theoremから従うという位置づけである。ただしv2自身の告知に従い、この結論は当該版で確立されていない。

### Theorem B（v2では証明無効の告知あり）

big性の核心は

$$
\mathscr O_{\mathbb P(T_X\oplus\mathscr O_X)}(1)
$$

がbigであるという形に移される。$T_X$ と $T_X\oplus\mathscr O_X$ のbig性が同値であることを用いるが、この主張もgapの影響下にある。

## 証明の見取り図

Introductionが述べる構想では、Viehwegのfiber-product trickで複数の射影から引き戻した $\mathscr O(1)$ の和 $L$ をbigかつnefにし、そのaugmented base locus $\mathbf B_+(L)$ が対角を含まないことを示して制限上のbig性を得る。base locusの余次元を評価し、適切なMMPにより $L$ と交点零の有理曲線でそれが覆われることを導く計画である。v2の告知は、この流れのLemma 4.3にgapがあると特定している。

## 原論文との対応

- **Abstractページ:** [arXiv:2408.03799](https://arxiv.org/abs/2408.03799)
- **Introduction:** pp. 2–3
- **主要な主張:** Theorem A, Theorem B
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
