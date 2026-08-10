---
layout: paper
title: "Projective Foliations with a Unique Singular Point and Maximum Algebraic Multiplicity"
title_ja: "唯一の特異点と最大代数的重複度をもつ射影的葉層"
authors: "Jorge Mozo-Fernández, P. Rubí Pantaleón-Mondragón"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2608.06588v1"
arxiv_url: "https://arxiv.org/abs/2608.06588v1"
arxiv_submitted: "2026-08-06"
arxiv_updated: "2026-08-06"
summary: >-
  複素射影平面上の次数 $d$ の余次元1正則葉層について、代数的重複度が最大値 $d$ で、特異点がただ一つとなる場合を特徴づける。局所特異点の Milnor 数と大域的な特異点数を結び、こうした葉層の不変直線および Hilbert--Mumford 安定性も調べる。
abstract_en: ""
summary_en: >-
  This paper examines degree-$d$ codimension-one holomorphic foliations on the complex projective plane whose distinguished singularity has the largest possible algebraic multiplicity. It gives an explicit description of this locus and a criterion for the distinguished point to be the foliation's only singularity. The analysis also bounds the invariant lines and considers aspects of Hilbert--Mumford stability. The results connect local singularity invariants with the global geometry of projective foliations.
abstract_ja: >-
  複素射影平面上の余次元1正則葉層のうち、次数 $d$ に等しい最大代数的重複度の特異点をもつものを扱う。このクラスを明示的に記述し、その特異点が唯一の特異点となるための特徴づけを与える。さらに不変直線の個数と Hilbert--Mumford 安定性に関する結果を述べる。
abstract_source_url: "https://arxiv.org/abs/2608.06588v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.06588v1](https://arxiv.org/abs/2608.06588v1)
- **著者:** Jorge Mozo-Fernández, P. Rubí Pantaleón-Mondragón
- **初回投稿日:** 2026年8月6日
- **最終更新日:** 2026年8月6日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG)
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素射影平面 $\mathbb{CP}^2$ 上の次数 $d$ の余次元1正則葉層には必ず特異点がある。本論文は、一つの特異点の代数的重複度が取り得る最大値 $d$ に達する場合を対象とし、さらにその点が葉層の唯一の特異点となる条件を調べる。

局所表示を $\omega=f(y,z)dy+g(y,z)dz$ とすると、代数的重複度は $f,g$ の最初の非零斉次成分の次数の小さい方であり、Milnor 数は局所環の商の次元で測られる。一方、Jouanolou の公式は全特異点の Milnor 数の和を $d^2+d+1$ とする。この局所量と大域的総和の対応が、唯一性を判定する仕組みである。

著者らは最大重複度をもつ葉層を明示的に記述し、唯一の特異点をもつための特徴づけを与える。Introduction では、そのクラスが高々 $d$ 本の不変直線しかもたないことも主要な帰結として示されている。

この問題は、不変代数曲線をもたない明示例の構成や、Cremona 変換による葉層の双有理モデルとも関係する。論文の後半では、座標変換による $\mathrm{SL}_3(\mathbb C)$ 作用の下での Hilbert--Mumford 安定性について部分的結果を与える。

## 背景と問題設定

次数 $d$ の葉層全体の空間を $\mathcal F(d;2)$ とする。孤立特異点だけをもつ葉層 $\mathcal F$ について Jouanolou の公式

$$
\sum_{p\in\operatorname{Sing}(\mathcal F)}\mu_p(\mathcal F)=d^2+d+1
$$

が成り立つ。そこで唯一の特異点 $p$ をもち、その Milnor 数が総和を尽くす葉層の集合と、さらに代数的重複度が $m$ である部分集合を

$$
\mathcal A_d=\{\mathcal F\in\mathcal F(d;2):
\operatorname{Sing}(\mathcal F)=\{p\},\ \mu_p(\mathcal F)=d^2+d+1\},
$$

$$
\mathcal A_{d,m}=\{\mathcal F\in\mathcal A_d:m_p(\mathcal F)=m\}
$$

と置く。本論文が焦点を当てるのは、従来詳しく調べられてきた $m=1$ と反対の極端である $\mathcal A_{d,d}$ である。

動機の一つは、任意の射影平面葉層が Cremona 変換により特異点を一つだけもつ葉層と双有理同値になるという先行結果である。ただし変換後の次数は大きくなり得る。本論文は、次数を固定し最大重複度という強い局所条件を課したときの構造を明らかにする。

## 主結果

### 最大重複度で特異点が唯一となるための特徴づけ

Introductionでは概略として次のように述べられている。次数 $d$、代数的重複度 $d$ の特異点をもつ葉層について、著者らは Milnor 数が $d^2+d+1$ に達する、したがってその点が唯一の特異点となるための明示的な特徴づけを与える。Introduction は判定の完全な形式を後続の Subsection 2.1 に委ねているため、ここでは不足する仮定や式を補わない。

### 不変直線の上限

$\mathcal A_{d,d}$ に属する葉層の不変直線は高々 $d$ 本である。これは、最大重複度かつ唯一の特異点という局所的に見える条件が、射影平面内の大域的な不変代数曲線を強く制約することを示す。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.06588v1](https://arxiv.org/abs/2608.06588v1)
- **Introduction:** Section 1, pp. 1--3
- **Introduction中で言及された主要結果:** $\mathcal A_{d,d}$ の特徴づけ、不変直線が高々 $d$ 本であること
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
